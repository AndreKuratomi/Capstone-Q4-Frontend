import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const schema = yup.object().shape({
  patient: yup
    .string()
    .min(11, "Paciente deve ter no mínimo 11 digitos")
    .required("Campo obrigatório"),
  professional: yup
    .string()
    .min(6, "Senha deve ter no mínimo 6 digitos")
    .required("Campo obrigatório"),
  date: yup.date().required("Campo obrigatório"),
  time: yup.string().required("Campo obrigatório"),
});

// export const {
//   register,
//   handleSubmit,
//   reset,
//   formState: { errors },
// } = useForm({
//   resolver: yupResolver(schema),
// });
