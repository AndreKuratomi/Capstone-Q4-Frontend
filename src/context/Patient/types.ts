import { ReactNode } from "react";
import { PatientFormProps } from "../../components/formPatient/types";
import { NavigateFunction } from "react-router-dom";

export interface PatientProviderProps {
  children: ReactNode;
}

export interface UserProps {
  age: number;
  cpf: string;
  email: string;
  sex: string;
  health_plan: string;
  name: string;
  phone: string;
}

export interface PatientProviderData {
  allPatient: UserProps[];
  createPatient: (data: PatientFormProps, navigate: NavigateFunction) => void;
  listAllPatients: () => void;
  updatePatient: (cpf: string, data: any) => void;
  deletePatient: (cpf: string) => void;
}
