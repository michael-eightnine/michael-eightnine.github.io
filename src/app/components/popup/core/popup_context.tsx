import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';

import { PopupID } from './types';

type ContextValue = {
  addInstance: (popupId: PopupID) => void;
  closeAllPopups: () => void;
  closeAllProcessing: boolean;
  getDockButtonRef: (popupId: PopupID) => HTMLElement | null;
  instances: { popupId: PopupID; instanceId: number }[];
  registerDockButton: (popupId: PopupID, ref: HTMLElement | null) => void;
  removeInstance: (instanceId: number) => void;
};

const defaultInstances: ContextValue['instances'] = [];

const PopupContext = createContext<ContextValue>({
  addInstance: () => {},
  closeAllPopups: () => {},
  closeAllProcessing: false,
  getDockButtonRef: () => null,
  instances: defaultInstances,
  registerDockButton: () => {},
  removeInstance: () => {}
});

const PopupContextProvider = ({ children }: ChildrenProps) => {
  const [closeAllProcessing, setCloseAllProcessing] = useState(false);
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
    setInstances((prev) => [
      ...prev,
      { instanceId: new Date().getTime(), popupId }
    ]);
  }, []);

  const removeInstance = useCallback((instanceId: number) => {
    setInstances((prev) =>
      prev.filter((instance) => instance.instanceId !== instanceId)
    );
  }, []);

  useEffect(() => {
    if (closeAllProcessing && instances.length === 0) {
      setCloseAllProcessing(false);
    }
  }, [closeAllProcessing, instances]);

  const closeAllPopups = useCallback(() => {
    if (instances.length > 0) {
      setCloseAllProcessing(true);
    }
  }, [instances]);

  const contextValue: ContextValue = useMemo(
    () => ({
      addInstance,
      closeAllPopups,
      closeAllProcessing,
      getDockButtonRef,
      instances,
      registerDockButton,
      removeInstance
    }),
    [addInstance, closeAllProcessing, closeAllPopups, instances, removeInstance]
  );

  return (
    <PopupContext.Provider value={contextValue}>
      {children}
    </PopupContext.Provider>
  );
};

export default PopupContextProvider;
export { PopupContext };
