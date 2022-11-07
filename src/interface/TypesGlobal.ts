import { IEditProfile } from "../pages/Dashboard/components/ModalEditProfile";
import { ILoginHookForm } from "../pages/Home/componentsHome/ModalLogin";
import { IRegisterHookForm } from "../pages/Home/componentsHome/ModalRegisterDev";

export interface IChildrenNode {
  children: React.ReactNode;
}

export interface IUserLogged {
  accessToken: string;
  user: {
    email: string;
    name: string;
    type: string;
    id: number;
    bio?: string;
    image?: string;
    phone?: string;
  };
}

export interface IUserContextProvider {
  actualSectionHome: string;
  setActualSectionHome: React.Dispatch<React.SetStateAction<string>>;
  loginUser: (data: ILoginHookForm) => Promise<void>;
  registerUser: (data: IRegisterHookForm) => Promise<void>;
  user: IUserLogged;
  actualModalDashboard: string;
  setactualModalDashboard: React.Dispatch<React.SetStateAction<string>>;
  editProfileRequest: (data: IEditProfile) => Promise<void>;
}
