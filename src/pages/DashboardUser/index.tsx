import { NavbarDashboard } from "../../components/NavbarDashboard";
import HistoricDashboard from "../../components/HistoricDashboard";
import MainDashboard from "../../components/MainDashboard";

const DashBoardUser = () => {
  return (
    <>
      <NavbarDashboard />
      <MainDashboard>
        <div className="leftBoard"></div>
        <HistoricDashboard list={[]} className="rightBoard" />
      </MainDashboard>
    </>
  );
};

export default DashBoardUser;
