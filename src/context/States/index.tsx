import { createContext, useContext, useState } from "react";
import { ContextStates, ProviderStates } from "./types";

const StatesContext = createContext<ContextStates>({} as ContextStates);

export const StatesProvider = ({ children }: ProviderStates) => {
  const [modalAppointment, setModalAppointment] = useState<boolean>(false);
  const [pageToLoad, setPageToLoad] = useState("home");
  const [appointmentsToLoad, setAppointmentsToLoad] = useState("tomorrow");
  const [profAppointment, setProfAppointment] = useState<boolean>(false);

  return (
    <StatesContext.Provider
      value={{
        setModalAppointment,
        modalAppointment,
        setPageToLoad,
        pageToLoad,
        setAppointmentsToLoad,
        appointmentsToLoad,
        setProfAppointment,
        profAppointment,
      }}
    >
      {children}
    </StatesContext.Provider>
  );
};

export const useStateContext = () => useContext(StatesContext);
