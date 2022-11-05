import axios, { AxiosResponse } from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IChildrenNode, IUserContextProvider } from "../interface/TypesGlobal";
import { ILoginHookForm } from "../pages/Home/componentsHome/ModalLogin";
import { IRegisterHookForm } from "../pages/Home/componentsHome/ModalRegisterDev";
import { Api } from "../services/api/api";
import { toastError, toastSuccess } from "../styles/components/Toastify/toast";

export const userContext = createContext<IUserContextProvider>(
  {} as IUserContextProvider
);

interface IUserLogged {
  accessToken: string;
  user: {
    email: string;
    name: string;
    type: string;
    id: number;
  };
}

export const UserContextProvider = ({ children }: IChildrenNode) => {
  const [actualSectionHome, setActualSectionHome] = useState("home");
  const navigate = useNavigate();

  const loginUser = async (data: ILoginHookForm) => {
    try {
      const request = await Api.post("/login", data);
      const response: IUserLogged = request.data;

      toastSuccess("Bem-vindo ao Dev's Help");

      if (response.user.type == "ong") {
        //redirecionar pra dash ong
      }

      if (response.user.type == "dev") {
        //redirecionar pra dash dev
      }
    } catch {
      toastError("Dados inválidos!");
    }
  };

  const registerUser = async (data: IRegisterHookForm) => {
    try {
      await Api.post("/register", data);
      toastSuccess("Cadastramos você, agora faça o login!");
      setActualSectionHome("login");
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        const error = err.response.data;

        toastError(
          error.includes("already") ? "Email já existe!" : "Dados inválidos!"
        );
      }
    }
  };

  // Funções a serem utilizadas ainda
  const createDemandRequest = async (data: any) => {
    try {
      const request = await Api.post("/jobs", data);
    } catch (err) {
      // Error
    }
  };

  const editDemandRequest = async (id: string) => {
    try {
      const request = await Api.patch(`/jobs/${id}`);
    } catch (err) {
      //Error
    }
  };

  const deleteDemandRequest = async (id: string) => {
    try {
      const request = await Api.delete(`/jobs/${id}`);
    } catch (err) {
      //Error
    }
  };

  const editProfileRequest = async (id: string) => {
    try {
      const request = await Api.patch(`/users/${id}`);
    } catch (err) {
      //Error
    }
  };

  return (
    <userContext.Provider
      value={{
        loginUser,
        actualSectionHome,
        setActualSectionHome,
        registerUser,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export const useUserContext = () => useContext(userContext);
