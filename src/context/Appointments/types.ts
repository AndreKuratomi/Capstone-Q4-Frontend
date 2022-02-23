import { ReactNode } from "react";
import { AppointmentsFormProps } from "../../components/formAppointments/types";

export interface AppointmentsContextProps {
  children: ReactNode;
}

export interface AppointmentsProviderProps {
  createAppointments: (newdata: AppointmentsFormProps) => void;
  appointmentPatient: AppointmentPatient[];
  appointmentProf: AppointmentProf[];
  tomorrow: Tomorrow[];
  waitList: WaitList[];
}

export interface AppointmentPatient {
  id: string;
  date: string;
  finished: string;
  patient_name: string;
  professional: {
    name: string;
    specialty: string;
    email: string;
    council_number: string;
  };
}
export interface AppointmentProf {
  id: string;
  date: string;
  finished: string;
  professional_name: string;
  patient: { name: string; age: number; sex: string; healt_plan: string };
}
export interface Tomorrow {
  professional: string;
  patient: string;
  date: string;
}
export interface WaitList {
  message: string;
  size: number;
  professional_email: string;
  appointments: [
    id: string,
    date: string,
    patient: { name: string; phone: string; email: string }
  ];
}
