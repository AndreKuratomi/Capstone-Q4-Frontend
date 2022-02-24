import * as yup from "yup";

const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
const validator = new RegExp(regex);

export const schema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Campo obrigatório"),
  password: yup
    .string()
    .min(6, "Senha deve ter no mínimo 6 digitos")
    .required("Campo obrigatório")
    .matches(
      validator,
      "Senha deve ter pelo menos um caractere minúsculo, um maiúsculo, um número e um caractere especial"
    ),
});
