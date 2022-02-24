import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAdmin } from "../../context/Admin";
import { Input } from "../input";
import login from "../../assets/login.svg";
import { Button, ContainerForm, LinkBox } from "./styles";
import { AdminFormProps } from "./types";
import { schema } from "./validators";

export const FormAdmin = () => {
  const navigate = useNavigate();
  const { createAdmin } = useAdmin();

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitData = (data: AdminFormProps) => {
    createAdmin(data, navigate);
    reset();
    console.log(data);
  };

  return (
    <ContainerForm>
      <form onSubmit={handleSubmit(onSubmitData)}>
        <div className="test">
          <span>Cadastre-se como secretária</span>
          <img src={login} alt="" />
        </div>
        <div className="inputs">
          <Input
            colorInput
            name="name"
            placeholder="Nome completo"
            type="text"
            register={register}
            error={errors.name?.message}
          />
          <Input
            colorInput
            name="email"
            placeholder="Email válido"
            type="email"
            register={register}
            error={errors.email?.message}
          />
          <Input
            colorInput
            name="password"
            placeholder="Senha"
            type="password"
            register={register}
            error={errors.password?.message}
          />
          <Input
            colorInput
            type="password"
            name="passwordConfirm"
            placeholder="Confirmar senha"
            register={register}
            error={errors.passwordConfirm?.message}
          />
          <Button type="submit">Cadastrar!</Button>
          <LinkBox>
            <Link to="/registermain">Voltar</Link>
            <Link to="/">Voltar para Home</Link>
          </LinkBox>
        </div>
      </form>
    </ContainerForm>
  );
};
