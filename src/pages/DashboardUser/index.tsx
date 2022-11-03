import { NavbarDashboard } from "../../components/NavbarDashboard";
import HistoricDashboard from "../../components/HistoricDashboard";
import MainDashboard from "../../components/MainDashboard";
import ProjectsCarousel from "./components/ProjectsCarousel";
import { ContainerDashboard } from "../../components/ContainerDashboard/ContainerDashboard";

const DashBoardUser = () => {
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
          <HistoricDashboard />
        </div>
        </ContainerDashboard>
      </MainDashboard>
    </>
  );
};

export default DashBoardUser;
