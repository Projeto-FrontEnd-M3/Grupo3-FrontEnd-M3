import { Header } from "./componentsHome/Header";
import { Outlet } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import ModalLogin from "./componentsHome/ModalLogin";
import ModalRegister from "./componentsHome/ModalRegister";
import ModalRegisterOng from "./componentsHome/ModalRegisterOng";
import ModalRegisterDev from "./componentsHome/ModalRegisterDev";
import ModalEditProfile from "../DashboardDev/ModalEditProfile";
import ModalCreateResquest from "../DashboardOng/ModalCreateResquest";
import ModalEditRequest from "../DashboardOng/ModalEditRequest";


const HomePage = () => {
  const { actualSectionHome } = useUserContext();

  return (
    <>
    
     <ModalEditRequest />
      {/* {actualSectionHome == "login" && <ModalLogin />}
      {actualSectionHome == "register" && <ModalRegister />}
      {actualSectionHome == "registerDev" && <ModalRegisterDev />}
      {actualSectionHome == "registerOng" && <ModalRegisterOng />}
      <Header />
      <Outlet /> */}
    </>
  );
};

export default HomePage;
