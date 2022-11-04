import { ContainerDashboard } from "../../components/ContainerDashboard/ContainerDashboard";
import HistoricDashboard from "../../components/HistoricDashboard";
import MainDashboard from "../../components/MainDashboard";
import { NavbarDashboard } from "../../components/NavbarDashboard";

const DashBoardOng = () => {
  return (
    <>
      <NavbarDashboard />
      <MainDashboard>
        <div className="dashboard__margin--left"></div>
        <ContainerDashboard>
          <div className="dashboard__left">teste</div>
          <div className="dashboard__right">
            <HistoricDashboard emptyListMessage="Assim que um de seus pedidos for concluido irá aparecer aqui." />
          </div>
        </ContainerDashboard>
      </MainDashboard>
    </>
  );
};

export default DashBoardOng;
