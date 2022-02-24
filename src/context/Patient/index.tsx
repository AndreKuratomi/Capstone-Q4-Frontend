import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PatientFormProps } from "../../components/formPatient/types";
import { PatientProviderData, PatientProviderProps } from "./types";
import api from "../../services/api";
import { useAuth } from "../Auth";
import toast from "react-hot-toast";

const PatientContext = createContext<PatientProviderData>(
  {} as PatientProviderData
);

export const PatientProvider = ({ children }: PatientProviderProps) => {
  const { token, user, setUser } = useAuth();
  const [allPatient, setAllPatient] = useState<[]>([]);
  const navigate = useNavigate();

  const createPatient = async (data: PatientFormProps) => {
    const { age, cpf, email, sex, health_plan, name, password, phone } = data;
    await api
      .post("/patient", {
        age: age,
        cpf: cpf,
        email: email,
        sex: sex,
        health_plan: health_plan,
        name: name,
        phone: phone,
        password: password,
      })
      .then((_) => {
        toast.success("Cadastro realizado com sucesso!");
        navigate("/login");
      })
      .catch((e) => console.log(e, "erro register"));
  };

  const listAllPatients = async () => {
    await api
      .get(`/patient`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setAllPatient(res.data);
      })
      .catch((e) => console.log(e, "erro get by email"));
  };

  const updatePatient = async (cpf: string, data: any) => {
    await api
      .patch(`/patient/${cpf}`, data)
      .then((res) => {
        console.log(res);
        toast.success("Paciente atualizado com sucesso!");
      })
      .catch((err) => console.log(err));
  };

  const deletePatient = async (cpf: string) => {
    await api
      .delete(`/patient/${cpf}`)
      .then((res) => {
        toast.success("Paciente deletado com sucesso!");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {}, []);

  return (
    <PatientContext.Provider
      value={{
        allPatient,
        listAllPatients,
        createPatient,
        updatePatient,
        deletePatient,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};

export const usePatient = () => useContext(PatientContext);
