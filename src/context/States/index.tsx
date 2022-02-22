import { createContext, useContext, useState } from "react";
import { ContextStates, ProviderStates } from "./types";

const StatesContext = createContext<ContextStates>({} as ContextStates);

export const StatesProvider = ({ children }: ProviderStates) => {
  const [modalAppointment, setModalAppointment] = useState<boolean>(false);
  const [pageToLoad, setPageToLoad] = useState("home");

  return (
    <StatesContext.Provider
      value={{
        setModalAppointment,
        modalAppointment,
        setPageToLoad,
        pageToLoad,
      }}
    >
      {children}
    </StatesContext.Provider>
  );
};

export const useStateContext = () => useContext(StatesContext);
