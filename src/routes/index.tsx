import { Navigate, Route, Routes } from "react-router-dom";
import DashBoardOng from "../pages/DashboardOng";
import DashBoardUser from "../pages/DashboardUser";
import HomePage from "../pages/Home";
import { MainSection } from "../pages/Home/componentsHome/MainSection";
import { SectionEquipe } from "../pages/Home/componentsHome/SectionEquipe";
import HowToUse from "../pages/Home/componentsHome/SectionHowToUse";
import ProjectsPage from "../pages/Projects";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="/" element={<Navigate to={"home"} />} />
        <Route path="/home" element={<MainSection />} />
        <Route path="sobre" element={<HowToUse />} />
        <Route path="equipe" element={<SectionEquipe />} />
      </Route>
      <Route path="/dashboard/user" element={<DashBoardUser />} />
      <Route path="/dashboard/ong" element={<DashBoardOng />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="*" element={<Navigate to={"home"} />} />
    </Routes>
  );
};

export default RoutesMain;
