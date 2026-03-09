import { useContext } from "react";
import { TestContext, type TestContextType } from "./TestProvider";


// 4. Custom hook with built-in error handling
export const useTestContext = (): TestContextType => {
  const context = useContext(TestContext);
  if (!context) {
    throw new Error('useTest must be used within a TestProvider');
  }
  return context;
};