import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";
import {
  AppointmentPatient,
  AppointmentProf,
  AppointmentsContextProps,
  AppointmentsProviderProps,
  Tomorrow,
  WaitList,
} from "./types";
import toast from "react-hot-toast";
import { AppointmentsFormProps } from "../../components/formAppointments/types";
import { useAuth } from "../Auth";

const AppointmentContext = createContext<AppointmentsProviderProps>(
  {} as AppointmentsProviderProps
);

export const AppointmentsProvider = ({
  children,
}: AppointmentsContextProps) => {
  const { token, user } = useAuth();

  const [appointmentPatient, setAppointmentPatient] = useState<
    AppointmentPatient[]
  >([] as AppointmentPatient[]);
  const [appointmentProf, setAppointmentProf] = useState<AppointmentProf[]>(
    [] as AppointmentProf[]
  );
  const [tomorrow, setTomorrow] = useState<Tomorrow[]>([] as Tomorrow[]);
  const [waitList, setWaitList] = useState<WaitList[]>([] as WaitList[]);

  const createAppointments = (data: AppointmentsFormProps) => {
    data.finished = false;
    api
      .post("/appointment", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Consulta marcada com sucesso!");
      })
      .catch((err) => {
        toast.error("Algo saiu errado. Tente novamente.");
      });
  };

  const filterPatient = (cpf: string) => {
    if ((token && user.cpf) || cpf) {
      api
        .get(`/appointment/patient/${user.cpf || cpf}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setAppointmentPatient(res.data);
        })
        .catch((err) => console.log(err));
    }
  };

  const filterProfessional = (councilNumber: string) => {
    if ((token && user.council_number) || councilNumber) {
      api
        .get(
          `/appointment/professional/${user.council_number || councilNumber}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          setAppointmentProf(res.data);
        })
        .catch((err) => console.log(err));
    }
  };

  const filterTomorrow = () => {
    if (token) {
      api
        .get(`/appointment/tomorrow`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setTomorrow(res.data);
        })
        .catch((err) => console.log(err));
    }
  };

  const filterWaitList = (councilNumber: string) => {
    if ((token && user.council_number) || councilNumber) {
      api
        .get(`/appointment/wait_list/${user.council_number || councilNumber}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setWaitList(res.data);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <AppointmentContext.Provider
      value={{
        createAppointments,
        filterPatient,
        filterProfessional,
        filterTomorrow,
        filterWaitList,
        appointmentPatient,
        appointmentProf,
        tomorrow,
        waitList,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointment = () => useContext(AppointmentContext);
