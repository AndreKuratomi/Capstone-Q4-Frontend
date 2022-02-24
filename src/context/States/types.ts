import React, { Dispatch, ReactNode } from "react";

export interface ProviderStates {
  children: ReactNode;
}

export interface ContextStates {
  setModalAppointment: Dispatch<React.SetStateAction<boolean>>;
  modalAppointment: boolean;
  setPageToLoad: Dispatch<React.SetStateAction<string>>;
  pageToLoad: string;
  setAppointmentsToLoad: Dispatch<React.SetStateAction<string>>;
  appointmentsToLoad: string;
  setProfAppointment: Dispatch<React.SetStateAction<boolean>>;
  profAppointment: boolean;
}
