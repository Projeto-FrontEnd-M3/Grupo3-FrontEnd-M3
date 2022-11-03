import { useUserContext } from "../../context/UserContext";
import { Header } from "./componentsHome/Header";
import { MainSection } from "./componentsHome/MainSection";
import ModalLogin from "./componentsHome/ModalLogin";
import ModalRegister from "./componentsHome/ModalRegister";
import { SectionEquipe } from "./componentsHome/SectionEquipe";

const HomePage = () => {
  const { actualSectionHome } = useUserContext();
  return (
    <>
      <Header />
      <MainSection />
    </>
  );
};

export default HomePage;
