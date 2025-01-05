import {
  createContext,
  MutableRefObject,
  useCallback,
  useMemo,
  useRef,
  useState
} from 'react';
import { PopupID } from './types';

type ContextValue = {
  welcomeDockButtonRef: MutableRefObject<HTMLButtonElement | null>;
  addInstance: (popupId: PopupID) => void;
  removeInstance: (popupId: PopupID, instanceId: string) => void;
  instances: Record<PopupID, string[]>;
};

const PopupContext = createContext<ContextValue>({
  welcomeDockButtonRef: { current: null },
  addInstance: () => {},
  removeInstance: () => {},
  instances: { [PopupID.Welcome]: [] }
});

const PopupContextProvider = ({ children }: ChildrenProps) => {
  const [instances, setInstances] = useState<ContextValue['instances']>({
    [PopupID.Welcome]: []
  });
  const welcomeDockButtonRef = useRef<HTMLButtonElement | null>(null);

  const addInstance = useCallback((popupId: PopupID) => {
    setInstances((prev) => ({
      ...prev,
      [popupId]: [...prev[popupId], `${new Date().getMilliseconds()}`]
    }));
  }, []);

  const removeInstance = useCallback((popupId: PopupID, instanceId: string) => {
    setInstances((prev) => ({
      ...prev,
      [popupId]: prev[popupId].filter(
        (prevInstance) => prevInstance !== instanceId
      )
    }));
  }, []);

  const contextValue: ContextValue = useMemo(
    () => ({
      instances,
      welcomeDockButtonRef,
      addInstance,
      removeInstance
    }),
    [addInstance, instances, removeInstance]
  );

  return (
    <PopupContext.Provider value={contextValue}>
      {children}
    </PopupContext.Provider>
  );
};

export default PopupContextProvider;
export { PopupContext };
