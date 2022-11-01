import { Route, Routes } from "react-router-dom";
import DashBoardPage from "../pages/Dashboard";
import HomePage from "../pages/Home";
import ProjectsPage from "../pages/Projects";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashBoardPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default RoutesMain;
