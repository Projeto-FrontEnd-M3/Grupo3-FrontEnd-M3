import { createContext, useContext } from "react";
import { IChildrenNode, IUserContextProvider } from "../interface/TypesGlobal";

export const userContext = createContext<IUserContextProvider>(
  {} as IUserContextProvider
);

export const userContextProvider = ({ children }: IChildrenNode) => {
    

  return <userContext.Provider value={{}}>{children}</userContext.Provider>;
};

export const useUserContext = () => useContext(userContext);
