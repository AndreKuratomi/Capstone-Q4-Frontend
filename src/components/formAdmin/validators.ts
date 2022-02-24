import * as yup from "yup";

const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
const validator = new RegExp(regex);

export const schema = yup.object().shape({
  name: yup.string().required("Campo obrigatório!"),
  email: yup.string().email("Email inválido!").required("Campo obrigatório!"),
  password: yup
    .string()
    .required("Campo obrigatório!")
    .min(6, "Senha deve ter no mínimo 6 dígitos")
    .matches(
      validator,
      "Senha deve ter pelo menos um caractere minúsculo, um maiúsculo, um número e um caractere especial"
    ),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Senhas não conferem!")
    .required("Campo obrigatório"),
});
