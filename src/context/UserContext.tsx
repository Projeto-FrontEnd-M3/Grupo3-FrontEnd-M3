import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  IChildrenNode,
  IDemandsResponse,
  IUserContextProvider,
  IUserLogged,
} from "../interface/TypesGlobal";
import { ICreateDemandRequest } from "../pages/Dashboard/components/ModalCreateResquest";
import { IEditProfile } from "../pages/Dashboard/components/ModalEditProfile";
import { ILoginHookForm } from "../pages/Home/componentsHome/ModalLogin";
import { IRegisterHookForm } from "../pages/Home/componentsHome/ModalRegisterDev";
import { Api } from "../services/api/api";
import { toastError, toastSuccess } from "../styles/components/Toastify/toast";

export const userContext = createContext<IUserContextProvider>(
  {} as IUserContextProvider
);

export const UserContextProvider = ({ children }: IChildrenNode) => {
  const [loading, setLoading] = useState(false);
  const [actualSectionHome, setActualSectionHome] = useState("home");
  const [actualModalDashboard, setactualModalDashboard] = useState("");
  const [user, setUser] = useState<IUserLogged>({} as IUserLogged);
  const [filteredListAux, setFilteredListAux] = useState(
    [] as IDemandsResponse[]
  );
  const navigate = useNavigate();

  const loginUser = async (data: ILoginHookForm) => {
    try {
      setLoading(true);
      const request = await Api.post("/login", data);
      const response: IUserLogged = request.data;
      setActualSectionHome("none");
      toastSuccess("Bem-vindo ao Dev's Help");

      setUser(response);
      sessionStorage.setItem("@DevsHubUser", JSON.stringify(response));
      navigate("/dashboard");
    } catch {
      toastError("Dados inválidos!");
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async (data: IRegisterHookForm) => {
    try {
      setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  // Funções a serem utilizadas ainda
  const createDemandRequest = async (data: ICreateDemandRequest) => {
    try {
      setLoading(true);
      const request = await Api.post("/jobs", data);
      toastSuccess("Cadastramos seu Pedido!");
    } catch (err) {
      toastError("Ocorreu um erro!");
    } finally {
      setactualModalDashboard("none");
      setLoading(false);
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

  const editProfileRequest = async (data: IEditProfile) => {
    !data.email && delete data.email;
    !data.bio && delete data.bio;
    !data.image && delete data.image;
    !data.password && delete data.password;
    !data.phone && delete data.phone;

    try {
      setLoading(true);
      const request = await Api.patch(`/users/${user.user.id}`, data);
      setUser({ ...user, user: request.data });
      setactualModalDashboard("none");
      toastSuccess("Perfil Editado!");

      sessionStorage.setItem("@DevsHubUser", JSON.stringify(user));
    } catch (err) {
      toastError("Ocorreu algum erro!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const objectUser = sessionStorage.getItem("@DevsHubUser");
    const objectUserParse = objectUser && JSON.parse(objectUser);

    if (objectUserParse) {
      setUser(objectUserParse);
    }
  }, []);

  useEffect(() => {
    if (user.user) {
      sessionStorage.setItem("@DevsHubUser", JSON.stringify(user));
      Api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${user.accessToken}`;
    }
  }, [user]);

  return (
    <userContext.Provider
      value={{
        loginUser,
        actualSectionHome,
        setActualSectionHome,
        registerUser,
        user,
        actualModalDashboard,
        setactualModalDashboard,
        editProfileRequest,
        createDemandRequest,
        loading,
        setLoading,
        filteredListAux,
        setFilteredListAux,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export const useUserContext = () => useContext(userContext);
