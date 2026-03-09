/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useState, type ReactNode } from 'react';

// 1. Define the shape of the context
export type TestContextType = {
  counter1: number;
  upcount1: () => void;
  counter2: number;
  upcount2: () => void;
}

// 2. Create the context with an initial value of undefined
// This allows us to check if the provider is missing later
export const TestContext = createContext<TestContextType | undefined>(undefined);

// 3. Define the Provider props
interface TestProviderProps {
  children: ReactNode;
}

export const TestProvider = ({ children }: TestProviderProps) => {
  const [counter1, setCounter1] = useState<number>(1);
  const [counter2, setCounter2] = useState<number>(1);

  const upcount1 = useCallback(() => {
    setCounter1((prev) => prev + 1);
  }, []);
  const upcount2 = useCallback(() => {
    setCounter2((prev) => prev + 1);
  }, []);

  return (
    <TestContext.Provider value={{ counter1, upcount1, counter2, upcount2 }}>
      {children}
    </TestContext.Provider>
  );
};