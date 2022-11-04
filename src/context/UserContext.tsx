import { createContext, useContext, useState } from "react";
import { IChildrenNode, IUserContextProvider } from "../interface/TypesGlobal";
import { ILoginHookForm } from "../pages/Home/componentsHome/ModalLogin";
import { IRegisterHookForm } from "../pages/Home/componentsHome/ModalRegisterDev";
import { Api } from "../services/api/api";

export const userContext = createContext<IUserContextProvider>(
  {} as IUserContextProvider
);

export const UserContextProvider = ({ children }: IChildrenNode) => {
  const [actualSectionHome, setActualSectionHome] = useState("home");

  const loginUser = (data: ILoginHookForm) => {
    Api.post("/login", data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const registerUser = (data: IRegisterHookForm) => {
    Api.post("/register", data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <userContext.Provider
      value={{ loginUser, actualSectionHome, setActualSectionHome }}
    >
      {children}
    </userContext.Provider>
  );
};

export const useUserContext = () => useContext(userContext);
