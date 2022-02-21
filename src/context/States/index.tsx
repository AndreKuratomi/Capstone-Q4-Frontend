import { createContext, useContext, useState } from "react";
import { ContextStates, ProviderStates } from "./types";

const StatesContext = createContext<ContextStates>({} as ContextStates);

export const StatesProvider = ({ children }: ProviderStates) => {
  const [modalAppointment, setModalAppointment] = useState<boolean>(false);
  const [apointments, setAppointments] = useState<boolean>(false);
  const [allProfessinals, setAllProfessinals] = useState<boolean>(false);

  return (
    <StatesContext.Provider
      value={{
        setModalAppointment,
        modalAppointment,
        setAppointments,
        apointments,
        setAllProfessinals,
        allProfessinals,
      }}
    >
      {children}
    </StatesContext.Provider>
  );
};

export const useStateContext = () => useContext(StatesContext);
