import { createContext, useContext, type PropsWithChildren } from 'react';
import type { UndrilledObject } from './types';

type UndrillContextType = {
  undrilledObject: UndrilledObject;
}

export type UndrillProviderProps = PropsWithChildren<{
  valueFromParent: UndrilledObject;
}>

const UndrillContext = createContext<UndrillContextType | undefined>(undefined);

export function UndrillProvider({ children, valueFromParent }: UndrillProviderProps) {


  return (
    <UndrillContext.Provider value={{ undrilledObject: valueFromParent }}>
      {children}
    </UndrillContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUndrill = () => {
  const context = useContext(UndrillContext);
  if (!context) {
    throw new Error('useUndrill must be used within an UndrillProvider');
  }
  return context;
};