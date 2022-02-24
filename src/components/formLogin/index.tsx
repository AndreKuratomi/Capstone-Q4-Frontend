import {
  BoxForm,
  BoxInfo,
  BoxIputs,
  ButtonLogin,
  ContainerForm,
  ContainerMobile,
  LinkBox,
} from "./style";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../input";
import { schema } from "./validators";
import { LoginProps } from "./types";
import { useAuth } from "../../context/Auth";
import login3 from "../../assets/login3.svg";

export const FormLogin = () => {
  const navigate = useNavigate();
  const { signin } = useAuth();
  const viewport = window.innerWidth;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitData = (data: LoginProps) => {
    signin(data, navigate);
    reset();
  };

  return (
    <>
      {viewport > 742 ? (
        <ContainerForm>
          <BoxForm>
            <BoxInfo>
              <h1>Faça o login para continuar</h1>
              <h3>Ainda não tem uma conta?</h3>
              <Link to="/registermain">
                <h3 className="cadastr-se">Cadastre-se aqui!</h3>
              </Link>
            </BoxInfo>
            <img className="desk" src={login3} alt="" />
            <form onSubmit={handleSubmit(onSubmitData)}>
              <BoxIputs>
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
                  type="password"
                  placeholder="Senha"
                  register={register}
                  name="password"
                  error={errors.password?.message}
                />
                <ButtonLogin type="submit" className="effect">
                  Login
                </ButtonLogin>
                {/* <LinkBox>
                  <Link to="/registermain">Abrir uma conta</Link>
                  <Link to="/">Voltar para Home</Link>
                </LinkBox> */}
              </BoxIputs>
            </form>
          </BoxForm>
        </ContainerForm>
      ) : (
        <>
          <ContainerMobile>
            <form onSubmit={handleSubmit(onSubmitData)}>
              <div className="header">
                <span>Bem vindo!</span>
                <img src={login3} alt="" />
              </div>
              <div className="inputs">
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
                  type="password"
                  placeholder="Senha"
                  register={register}
                  name="password"
                  error={errors.password?.message}
                />
                <ButtonLogin type="submit">Login</ButtonLogin>
                <LinkBox>
                  <Link to="/registermain">Abrir uma conta</Link>
                  <Link to="/">Voltar para Home</Link>
                </LinkBox>
              </div>
            </form>
          </ContainerMobile>
        </>
      )}
    </>
  );
};
