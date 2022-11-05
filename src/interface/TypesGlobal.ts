import { ILoginHookForm } from "../pages/Home/componentsHome/ModalLogin";
import { IRegisterHookForm } from "../pages/Home/componentsHome/ModalRegisterDev";

export interface IChildrenNode {
  children: React.ReactNode;
}

export interface IUserContextProvider {
  actualSectionHome: string;
  setActualSectionHome: React.Dispatch<React.SetStateAction<string>>;
  loginUser: (data: ILoginHookForm) => Promise<void>;
  registerUser: (data: IRegisterHookForm) => Promise<void>;
}
