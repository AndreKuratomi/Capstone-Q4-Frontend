import * as yup from "yup";

const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
const validator = new RegExp(regex);

export const schema = yup.object().shape({
  cpf: yup
    .string()
    .min(11, "CPF deve ter 11 digitos")
    .max(11, "CPF deve ter 11 digitos")
    .required("Campo obrigatório"),
  name: yup.string().required("Campo obrigatório"),
  age: yup.number(),
  gender: yup.string(),
  email: yup.string().email("Email inválido").required("Campo obrigatório"),
  phone: yup.string().required("Campo obrigatório"),
  health_insurance: yup.string(),
  password: yup
    .string()
    .min(6, "Senha deve ter no mínimo 6 digitos")
    .required("Campo obrigatório")
    .matches(
      validator,
      "Senha deve ter pelo menos um caractere minúsculo, um maiúsculo, um número e um caractere especial"
    ),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Senha errada")
    .required("Campo obrigatório"),
});
