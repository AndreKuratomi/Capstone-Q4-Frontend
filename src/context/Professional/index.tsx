import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ProfessionalFormProps } from "../../components/formProfessionl/types";
import api from "../../services/api";
import { useAuth } from "../Auth";
import { ProfessionalDataProps, ProfessionalProviderProps } from "./types";

const ProfessionalContext = createContext<ProfessionalDataProps>(
  {} as ProfessionalDataProps
);

export const ProfessionalProvider = ({
  children,
}: ProfessionalProviderProps) => {
  const { token, setUser, user } = useAuth();
  const [allProfessional, setAllProfessional] = useState<[]>([]);
  const navigate = useNavigate();

  const CreateProfessional = async (data: ProfessionalFormProps) => {
    const { council_number, name, email, phone, specialty, address, password } =
      data;

    await api
      .post("/professional", {
        council_number: council_number,
        name: name,
        email: email,
        phone: phone,
        specialty: specialty,
        address: address,
        password: password,
      })
      .then((_) => {
        toast.success("Cadastro realizado com sucesso!");
        navigate("/login");
      })
      .catch((e) => console.log(e, "erro register"));
  };
  const ListAllProfessional = async () => {
    await api
      .get("/professional", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setAllProfessional(res.data);
      })
      .catch((e) => console.log(e, "error get all professional"));
  };

  const ProfessionalById = async (identify: string) => {
    await api
      .get(`/professional/${identify}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((e) => console.log(e, "erro get by id"));
  };

  const UpdateProfessional = async (identify: string, data: any) => {
    await api
      .patch(`/professional/${identify}`, data)
      .then((res) => {
        console.log(res);
        toast.success("Profissional atualizado com sucesso!");
      })
      .catch((err) =>
        toast.error("Ocorreu um erro ao atualizar o profissional!")
      );
  };

  const GetBySpecialty = async (specialty: string) => {
    await api
      .get(`/professional/specialty/${specialty}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res);
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };

  const DeleteProfessional = async (identify: string) => {
    await api
      .delete(`/professional/${identify}`)
      .then((res) => {
        toast.success("Profissional deletado com sucesso!");
      })
      .catch((err) => toast.error("Ocorreu um erro ao deletar o profissional"));
  };

  useEffect(() => {}, []);

  return (
    <ProfessionalContext.Provider
      value={{
        ProfessionalById,
        ListAllProfessional,
        CreateProfessional,
        DeleteProfessional,
        GetBySpecialty,
        UpdateProfessional,
        allProfessional,
      }}
    >
      {children}
    </ProfessionalContext.Provider>
  );
};

export const useProfessional = () => useContext(ProfessionalContext);
