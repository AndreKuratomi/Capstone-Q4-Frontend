import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validators";
import { Input } from "../input";
import { ContainerForm, LinkBox, ButtonPatient } from "./styles";
import login from "../../assets/login.svg";
import { usePatient } from "../../context/Patient";
import { PatientFormProps } from "./types";

export const FormPatient = () => {
  const navigate = useNavigate();
  const { createPatient } = usePatient();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitData = (data: PatientFormProps) => {
    createPatient(data, navigate);
    reset();
  };

  return (
    <ContainerForm>
      <form onSubmit={handleSubmit(onSubmitData)}>
        <div className="header">
          <span>Cadastre-se como paciente</span>
          <img src={login} alt="" />
        </div>
        <div className="inputs">
          <Input
            colorInput
            type="text"
            placeholder="CPF 00000000000"
            register={register}
            name="cpf"
            error={errors.cpf?.message}
          />
          <Input
            colorInput
            type="text"
            placeholder="Nome"
            register={register}
            name="name"
            error={errors.name?.message}
          />
          <Input
            colorInput
            type="number"
            placeholder="Idade"
            register={register}
            name="age"
            error={errors.age?.message}
          />
          <Input
            colorInput
            type="text"
            placeholder="Genero"
            register={register}
            name="sex"
            error={errors.gender?.message}
          />
          <Input
            colorInput
            type="text"
            placeholder="Telefone (xx)xxxxx-xxxx"
            register={register}
            name="phone"
            error={errors.phone?.message}
          />
          <Input
            colorInput
            type="email"
            placeholder="Email"
            register={register}
            name="email"
            error={errors.email?.message}
          />
          <Input
            colorInput
            type="text"
            placeholder="Plano de Saúde"
            register={register}
            name="health_plan"
            error={errors.health_insurance?.message}
          />

          <Input
            colorInput
            type="password"
            placeholder="Senha"
            register={register}
            name="password"
            error={errors.password?.message}
          />
          <Input
            type="password"
            placeholder="Confirmar senha"
            register={register}
            name="passwordConfirm"
            error={errors.passwordConfirm?.message}
          />
          <ButtonPatient type="submit">Login</ButtonPatient>
          <LinkBox>
            <Link to="/registermain">Voltar</Link>
            <Link to="/">Voltar para Home</Link>
          </LinkBox>
        </div>
      </form>
    </ContainerForm>
  );
};
