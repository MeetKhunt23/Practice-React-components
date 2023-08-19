import { useContext, createContext } from "react";

export const FormContext = createContext(null);
export const FormProvider = FormContext.Provider;
export function useFormcontext() {
  const context = useContext(FormContext);
  return context
}
