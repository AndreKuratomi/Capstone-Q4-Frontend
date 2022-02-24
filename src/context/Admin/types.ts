import { ReactNode } from "react";
import { NavigateFunction } from "react-router-dom";
import { AdminFormProps } from "../../components/formAdmin/types";

export interface AdminProviderProps {
  children: ReactNode;
}

export interface AdminProps {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface AdminProviderData {
  createAdmin: (admin: AdminFormProps, navigate: NavigateFunction) => void;
  updateAdmin: (id: string, data: any) => void;
}
