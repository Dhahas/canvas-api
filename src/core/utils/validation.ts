import { DhContext } from "../models/dh-context";

export const validateDhContextInitialization = () => {
  if (DhContext.getContext() === undefined || DhContext.getContext() === null) {
    throw new Error("DhContext not initialized");
  }
};
