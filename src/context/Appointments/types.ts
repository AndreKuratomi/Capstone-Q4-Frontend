import { ReactNode } from "react";
import { AppointmentsFormProps } from "../../components/formAppointments/types";

export interface AppointmentsContextProps {
  children: ReactNode;
}

export interface AppointmentsProviderProps {
  createAppointments: (newdata: AppointmentsFormProps) => void;
  filterPatient: (cpf: string) => void;
  filterProfessional: (councilNumber: string) => void;
  filterTomorrow: () => void;
  filterWaitList: (councilNumber: string) => void;
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
  professional: {
    name: string;
    council_number: string;
    phone: string;
  };
  patient: {
    name: string;
    cpf: string;
    phone: string;
  };
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
