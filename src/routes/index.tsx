import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import { ProjetoAtual } from "../pages/Dashboard/components/ProjetoAtual";
import ProjetosAnteriores from "../pages/Dashboard/components/ProjetosAnteriores";
import ProjetosDisponiveis from "../pages/Dashboard/components/ProjetosDisponiveis";
import HomePage from "../pages/Home";
import { MainSection } from "../pages/Home/componentsHome/MainSection";
import { SectionEquipe } from "../pages/Home/componentsHome/SectionEquipe";
import HowToUse from "../pages/Home/componentsHome/SectionHowToUse";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="/" element={<Navigate to={"home"} />} />
        <Route path="/home" element={<MainSection />} />
        <Route path="sobre" element={<HowToUse />} />
        <Route path="equipe" element={<SectionEquipe />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="/dashboard" element={<Navigate to={"atual"} />} />
        <Route path="atual" element={<ProjetoAtual />} />
        <Route path="historico" element={<ProjetosAnteriores />} />
        <Route path="projetos" element={<ProjetosDisponiveis />} />
      </Route>
      <Route path="*" element={<Navigate to={"home"} />} />
    </Routes>
  );
};

export default RoutesMain;
