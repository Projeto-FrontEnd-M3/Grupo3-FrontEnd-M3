import React from "react";
import { Outlet } from "react-router-dom";
import { NavbarDashboard } from "../../components/NavbarDashboard";
import { ContainerDev, ContainerOutlet } from "./style";
import { useUserContext } from "../../context/UserContext";
import ModalEditProfile from "./components/ModalEditProfile";
import ModalCreateResquest from "./components/ModalCreateResquest";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const Dashboard = () => {
  const { actualModalDashboard } = useUserContext();

  return (
    <>
      {actualModalDashboard == "editProfile" && <ModalEditProfile />}
      {actualModalDashboard == "createDemand" && <ModalCreateResquest />}
      <NavbarDashboard />
      <ContainerDev>
        <ContainerOutlet>
          <Outlet />
        </ContainerOutlet>
      </ContainerDev>
    </>
  );
};

export default Dashboard;
