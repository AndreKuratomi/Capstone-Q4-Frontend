import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validators";
import { Input } from "../input";
import { ContainerForm, LinkBox, ButtonPatient } from "./style";
import login from "../../assets/login.svg";
import { ProfessionalFormProps } from "./types";
import { useProfessional } from "../../context/Professional";

export const FormProfessional = () => {
  const { CreateProfessional } = useProfessional();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitData = (data: ProfessionalFormProps) => {
    CreateProfessional(data);
    // reset();
    console.log(data);
  };

  return (
    <ContainerForm>
      <form onSubmit={handleSubmit(onSubmitData)}>
        <div className="test">
          <span>Cadastre-se como médico</span>
          <img src={login} alt="" />
        </div>
        <div className="inputs">
          <Input
            colorInput
            type="text"
            placeholder="CRM 00000-XX"
            register={register}
            name="council_number"
            error={errors.council_number?.message}
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
            type="text"
            placeholder="Especialidade"
            register={register}
            name="specialty"
            error={errors.speciality?.message}
          />
          <Input
            colorInput
            type="text"
            placeholder="Endereço"
            register={register}
            name="address"
            error={errors.address?.message}
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
          <ButtonPatient type="submit">Cadastrar</ButtonPatient>
          <LinkBox>
            <Link to="/registermain">Voltar</Link>
            <Link to="/">Voltar para Home</Link>
          </LinkBox>
        </div>
      </form>
    </ContainerForm>
  );
};
