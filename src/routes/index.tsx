import { Route, Routes } from "react-router-dom";
import DashBoardOng from "../pages/DashboardOng";
import DashBoardDev from "../pages/DashboardDev";
import HomePage from "../pages/Home";
import ProjectsPage from "../pages/Projects";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard/dev" element={<DashBoardDev />} />
      <Route path="/dashboard/ong" element={<DashBoardOng />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default RoutesMain;
