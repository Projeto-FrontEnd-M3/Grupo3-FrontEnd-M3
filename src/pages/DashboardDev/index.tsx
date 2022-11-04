import { NavbarDashboard } from "../../components/NavbarDashboard";
import HistoricDashboard from "../../components/HistoricDashboard";
import MainDashboard from "../../components/MainDashboard";
import ProjectsCarousel from "./components/ProjectCarousel/ProjectsCarousel";
import { ContainerDashboard } from "../../components/ContainerDashboard/ContainerDashboard";

const DashBoardDev = () => {
  return (
    <>
      <NavbarDashboard />
      <MainDashboard>
        <div className="dashboard__margin--left"></div>
        <ContainerDashboard>
          <div className="dashboard__left">
            <ProjectsCarousel />
          </div>
          <div className="dashboard__right">
            <HistoricDashboard emptyListMessage="Para iniciar um novo, basta aceitar um projeto da lista ao lado."/>
          </div>
        </ContainerDashboard>
      </MainDashboard>
    </>
  );
};

export default DashBoardDev;
