import { useState } from "react";
import { useAppointment } from "../../context/Appointments";
import { Input } from "../input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validators";
import { AppointmentsFormProps } from "./types";
import { Button, ContainerForm } from "./styles";
import appointmentsImg from "../../assets/appointmentsImg.svg";
import { FaRegWindowClose } from "react-icons/fa";
import { useStateContext } from "../../context/States";
import { useAuth } from "../../context/Auth";

export const FormAppointments = () => {
  const { createAppointments } = useAppointment();
  const { setModalAppointment, modalAppointment } = useStateContext();
  const { user } = useAuth();
  const [date1, setDate] = useState("".replace("-", "/"));

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitData = (data: AppointmentsFormProps) => {
    const { date, professional, patient, time } = data;
    const newdate = date1 + "T" + time + ":00" + "Z";
    const newdata = {
      professional: professional,
      patient: patient,
      newdate: newdate,
    };
    createAppointments(newdata);
    reset();
  };

  const handleSchedule = () => {
    setModalAppointment(false);
  };

  return (
    <>
      <ContainerForm>
        <form onSubmit={handleSubmit(onSubmitData)}>
          <div className="header">
            <FaRegWindowClose onClick={handleSchedule} />
            <span>Marcar consulta</span>
            <img src={appointmentsImg} alt="medic and patient" />
          </div>
          <div className="inputs">
            <Input
              colorInput
              type="text"
              placeholder="CPF do paciente"
              value={user?.cpf}
              register={register}
              name="patient"
              error={errors.patient?.message}
            />
            <Input
              colorInput
              type="text"
              placeholder="CRM do médico"
              register={register}
              name="professional"
              error={errors.professional?.message}
            />
            <Input
              colorInput
              type="date"
              placeholder="Data da consulta"
              register={register}
              name="date"
              error={errors.date?.message}
              onChange={(e) => setDate(e.target.value)}
            />
            <Input
              colorInput
              type="time"
              placeholder="Hora da consulta"
              register={register}
              name="time"
              error={errors.time?.message}
              step="2"
              // onChange={(e) => setDate(e.target.value)}
            />
            <Button type="submit">Agendar</Button>
          </div>
        </form>
      </ContainerForm>
    </>
  );
};
