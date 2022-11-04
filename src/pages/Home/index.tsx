import { Header } from "./componentsHome/Header";
import { Outlet } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import ModalLogin from "./componentsHome/ModalLogin";
import ModalRegister from "./componentsHome/ModalRegister";

const HomePage = () => {
  const { actualSectionHome } = useUserContext();

  return (
    <>
      {actualSectionHome == "login" && <ModalLogin />}
      {actualSectionHome == "register" && <ModalRegister />}
      <Header />
      <Outlet />
    </>
  );
};

export default HomePage;
