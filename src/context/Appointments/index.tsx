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
  const { token, userType } = useAuth();

  const [appointmentPatient, setAppointmentPatient] = useState<
    AppointmentPatient[]
  >([] as AppointmentPatient[]);
  const [appointmentProf, setAppointmentProf] = useState<AppointmentProf[]>(
    [] as AppointmentProf[]
  );
  const [tomorrow, setTomorrow] = useState<Tomorrow[]>([] as Tomorrow[]);
  const [waitList, setWaitList] = useState<WaitList[]>([] as WaitList[]);

  const createAppointments = (newdata: AppointmentsFormProps) => {
    api
      .post("/appointments", newdata, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Consulta marcada com sucesso!");
      })
      .catch((err) => {
        toast.success("Algo saiu errado. Tente novamente.");
      });
  };

  // //appointments patient
  // useEffect(() => {
  //   if (token) {
  //     api
  //       .get(`/appointment/patient/${JSON.parse(userType)}`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       })
  //       .then((res) => {
  //         console.log(res);
  //         setAppointmentPatient(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }, [token]);

  // //appointment professional
  // useEffect(() => {
  //   if (token) {
  //     api
  //       .get(`/appointment/professional/${JSON.parse(userType)}`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       })
  //       .then((res) => {
  //         setAppointmentProf(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }, [token]);

  // //appointment tomorrow
  // useEffect(() => {
  //   if (token) {
  //     api
  //       .get(`/appointment/tomorrow`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       })
  //       .then((res) => {
  //         setTomorrow(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }, [token]);

  // //appointment wait list professional
  // useEffect(() => {
  //   if (token) {
  //     api
  //       .get(`/appointment/wait_list/${JSON.parse(userType)}`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       })
  //       .then((res) => {
  //         setWaitList(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }, [token]);

  return (
    <AppointmentContext.Provider
      value={{
        createAppointments,
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
