import HistoricDashboard from "../../components/HistoricDashboard";
import MainDashboard from "../../components/MainDashboard";

const DashBoardUser = () => {
  return (
    <>
      <header
        style={{
          height: "70px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "var(--color-primary-negative)",
        }}
      >
        Header ficticia
      </header>
      <MainDashboard>
        <div className="leftBoard"></div>
        <HistoricDashboard list={[]} className="rightBoard" />
      </MainDashboard>
    </>
  );
};

export default DashBoardUser;
