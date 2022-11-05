import { Header } from "./componentsHome/Header";
import { Outlet } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import ModalLogin from "./componentsHome/ModalLogin";
import ModalRegister from "./componentsHome/ModalRegister";
import ModalRegisterOng from "./componentsHome/ModalRegisterOng";
import ModalRegisterDev from "./componentsHome/ModalRegisterDev";

const HomePage = () => {
  const { actualSectionHome } = useUserContext();

  return (
    <>
      {actualSectionHome == "login" && <ModalLogin />}
      {actualSectionHome == "register" && <ModalRegister />}
      {actualSectionHome == "registerDev" && <ModalRegisterDev />}
      {actualSectionHome == "registerOng" && <ModalRegisterOng />}
      <Header />
      <Outlet />
    </>
  );
};

export default HomePage;
