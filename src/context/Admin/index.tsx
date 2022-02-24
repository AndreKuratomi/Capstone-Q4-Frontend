import { createContext, useContext } from "react";
import toast from "react-hot-toast";
import { NavigateFunction } from "react-router-dom";
import { AdminFormProps } from "../../components/formAdmin/types";
import api from "../../services/api";
import { useAuth } from "../Auth";
import { AdminProps, AdminProviderData, AdminProviderProps } from "./types";

const AdminContext = createContext<AdminProviderData>({} as AdminProviderData);

export const AdminProvider = ({ children }: AdminProviderProps) => {
  const { token } = useAuth();

  const createAdmin = async (
    adminData: AdminFormProps,
    navigate: NavigateFunction
  ) => {
    await api
      .post("/admin", adminData)
      .then((_) => {
        toast.success("Admin cadastrado com sucesso!");
        navigate("/");
      })
      .catch((_) => {
        toast.error(
          "Algo saiu errado. Verifique se o email não está repetido e tente novamente."
        );
      });
  };

  const updateAdmin = async (id: string, data: any) => {
    await api
      .post(`/admin/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Admin cadastrado com sucesso!");
      })
      .catch((_) => {
        toast.error("Algo saiu errado. Tente novamente.");
      });
  };

  return (
    <AdminContext.Provider value={{ createAdmin, updateAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);
