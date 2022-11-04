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

export const registerValidate = yup.object().shape({
    // email: yup
    //   .string()
    //   .email("Email inválido!")
    //   .max(64, "Tamanho máximo: 64 caracteres!")
    //   .required("Email obrigatório!"),
    // password: yup.string().required("Senha obrigatória!"),
  });