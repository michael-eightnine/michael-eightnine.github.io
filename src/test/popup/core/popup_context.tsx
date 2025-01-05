import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { PopupID } from './types';

const defaultInstances: Record<PopupID, number[]> = {
  [PopupID.Welcome]: [],
  [PopupID.Contact]: [],
  [PopupID.Skills]: []
} as const;

type ContextValue = {
  registerDockButton: (popupId: PopupID, ref: HTMLElement | null) => void;
  getDockButtonRef: (popupId: PopupID) => HTMLElement | null;
  addInstance: (popupId: PopupID) => void;
  removeInstance: (popupId: PopupID, instanceId: number) => void;
  instances: Record<PopupID, number[]>;
  closeAllInitiated: boolean;
  closeAllPopups: () => void;
};

const PopupContext = createContext<ContextValue>({
  registerDockButton: () => {},
  getDockButtonRef: () => null,
  addInstance: () => {},
  removeInstance: () => {},
  instances: defaultInstances,
  closeAllInitiated: false,
  closeAllPopups: () => {}
});

const PopupContextProvider = ({ children }: ChildrenProps) => {
  const [closeAllInitiated, setCloseAllInitiated] = useState(false);
  const [instances, setInstances] =
    useState<ContextValue['instances']>(defaultInstances);
  const dockButtonRefs = useRef<Map<PopupID, HTMLElement | null>>(new Map());

  const registerDockButton = (popupId: PopupID, ref: HTMLElement | null) => {
    dockButtonRefs.current.set(popupId, ref);
  };

  const getDockButtonRef = (popupId: PopupID) => {
    return dockButtonRefs.current.get(popupId) || null;
  };

  const addInstance = useCallback((popupId: PopupID) => {
    setInstances((prev) => ({
      ...prev,
      [popupId]: [...prev[popupId], new Date().getTime()]
    }));
  }, []);

  const removeInstance = useCallback((popupId: PopupID, instanceId: number) => {
    setInstances((prev) => ({
      ...prev,
      [popupId]: prev[popupId].filter(
        (prevInstance) => prevInstance !== instanceId
      )
    }));
  }, []);

  useEffect(() => {
    if (
      closeAllInitiated &&
      Object.values(instances).every(
        (instanceList) => instanceList.length === 0
      )
    ) {
      setCloseAllInitiated(false);
    }
  }, [closeAllInitiated, instances]);

  const closeAllPopups = useCallback(() => {
    if (
      Object.values(instances).some((instanceList) => instanceList.length > 0)
    ) {
      setCloseAllInitiated(true);
    }
  }, [instances]);

  const contextValue: ContextValue = useMemo(
    () => ({
      instances,
      registerDockButton,
      getDockButtonRef,
      addInstance,
      removeInstance,
      closeAllPopups,
      closeAllInitiated
    }),
    [addInstance, closeAllInitiated, closeAllPopups, instances, removeInstance]
  );

  return (
    <PopupContext.Provider value={contextValue}>
      {children}
    </PopupContext.Provider>
  );
};

export default PopupContextProvider;
export { PopupContext };
