import * as yup from "yup";

// Exemplo de uso
export const loginValidate = yup.object().shape({
  email: yup
    .string()
    .email("Email inválido!")
    .max(64, "Tamanho máximo: 64 caracteres!")
    .required("Email obrigatório!"),
  password: yup.string().required("Senha obrigatória!"),
});

// {
//   "email": "dev@dev.com",
//   "password": "123456",
//   "name": "Desenvolvedor",
//   "type": "dev"
// }

export const registerValidateDev = yup.object().shape({
  email: yup
    .string()
    .email("Email inválido!")
    .max(64, "Tamanho máximo: 64 caracteres!")
    .required("Email obrigatório!"),
  password: yup.string().required("Senha obrigatória!"),
  name: yup
    .string()
    .max(22, "Máximo de 22 Caracteres!")
    .required("Nome obrigatório!"),
  type: yup.string().required(),
});
