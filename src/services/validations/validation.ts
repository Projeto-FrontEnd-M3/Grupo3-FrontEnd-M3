import * as yup from "yup";

//Home Validations

export const loginValidate = yup.object().shape({
  email: yup
    .string()
    .email("Email inválido!")
    .max(64, "Tamanho máximo: 64 caracteres!")
    .required("Email obrigatório!"),
  password: yup
    .string()
    .required("Senha obrigatória!")
    .min(8, "Mínimo de 8 caracteres!"),
});

export const registerValidateDev = yup.object().shape({
  email: yup
    .string()
    .email("Email inválido!")
    .max(64, "Tamanho máximo: 64 caracteres!")
    .required("Email obrigatório!"),
  password: yup
    .string()
    .required("Senha obrigatória!")
    .min(8, "Mínimo de 8 caracteres!"),
  name: yup
    .string()
    .min(5, "Mínimo de 5 caracteres!")
    .max(22, "Máximo de 22 Caracteres!")
    .required("Nome obrigatório!"),
  type: yup.string().required(),
});

export const registerValidateOng = yup.object().shape({
  email: yup
    .string()
    .email("Email inválido!")
    .max(64, "Tamanho máximo: 64 caracteres!")
    .required("Email obrigatório!"),
  password: yup
    .string()
    .required("Senha obrigatória!")
    .min(8, "Mínimo de 8 caracteres!"),
  name: yup
    .string()
    .min(5, "Mínimo de 5 caracteres!")
    .max(22, "Máximo de 22 Caracteres!")
    .required("Nome obrigatório!"),
  type: yup.string().required(),
  cnpj: yup
    .string()
    .required("Cnpj Obrigatório")
    .length(14, "CNPJ deve conter 14 Números.")
    .matches(/^[0-9]+$/, "Deve conter apenas números!"),
});

//Dashboard Validations

export const createDemandValidate = yup.object().shape({
  title: yup
    .string()
    .required("Nome do pedido obrigatório!")
    .max(22, "Máximo de 22 caracteres!"),
  description: yup
    .string()
    .required("Descrição do pedido obrigatória!")
    .min(300, "Deve conter no mínimo 300 caracteres!")
    .max(900, "Máximo de 900 caracteres!"),
  estimated_time: yup
    .string()
    .required("Data de entrega obrigatória!")
    .length(10, "Data deve estar no formato 11/11/1111"),
});

export const demandEditValidate = yup.object().shape({
  name: yup
    .string()
    .required("Nome obrigatório!")
    .max(22, "Máximo de 22 caracteres!"),
  description: yup
    .string()
    .required("Descrição do pedido obrigatória!")
    .max(256, "Máximo de 256 caracteres!"),
  estimated_time: yup
    .string()
    .required("Data de entrega obrigatória!")
    .max(10, "Data deve estar no formato 11/11/1111"),
  status: yup.string().required("Status obrigatório!"),
  project_type: yup.string().required("Tipo do projeto obrigatório!"),
});

export const profileEditValidate = yup.object().shape({
  name: yup
    .string()
    .required("Nome obrigatório!")
    .max(22, "Máximo de 22 caracteres!"),
  description: yup
    .string()
    .required("Descrição do pedido obrigatória!")
    .max(48, "Máximo de 48 caracteres!"),
  estimated_time: yup
    .string()
    .required("Data de entrega obrigatória!")
    .max(8, "Data deve estar no formato 11/11/11"),
});

export const editDemandValidate = yup.object().shape({
  title: yup
    .string()
    .required("Nome do pedido obrigatório!")
    .max(22, "Máximo de 22 caracteres!"),
  description: yup
    .string()
    .required("Descrição do pedido obrigatória!")
    .min(300, "Deve conter no mínimo 300 caracteres!")
    .max(900, "Máximo de 900 caracteres!"),
});
