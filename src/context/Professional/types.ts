import { Dispatch, ReactNode } from "react";
import { ProfessionalFormProps } from "../../components/formProfessionl/types";

export interface ProfessionalProviderProps {
  children: ReactNode;
}

export interface ProfessionalProps {
  council_number?: string;
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  specialty?: string;
  address?: string;
}

export interface ProfessionalDataProps {
  ProfessionalById: (identify: string) => void;
  ListAllProfessional: () => void;
  CreateProfessional: (data: ProfessionalFormProps) => void;
  DeleteProfessional: (identify: string) => void;
  GetBySpecialty: (specialty: string) => void;
  UpdateProfessional: (identify: string, data: ProfessionalFormProps) => void;
  allProfessional: ProfessionalProps[];
}
