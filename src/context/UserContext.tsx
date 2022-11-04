import { createContext, useContext, useState } from "react";
import { IChildrenNode, IUserContextProvider } from "../interface/TypesGlobal";

export const userContext = createContext<IUserContextProvider>(
  {} as IUserContextProvider
);

export const UserContextProvider = ({ children }: IChildrenNode) => {
  const [actualSectionHome, setActualSectionHome] = useState("home");

  return (
    <userContext.Provider value={{ actualSectionHome, setActualSectionHome }}>
      {children}
    </userContext.Provider>
  );
};

export const useUserContext = () => useContext(userContext);
