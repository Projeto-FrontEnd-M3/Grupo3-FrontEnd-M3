import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { NavbarDashboard } from "../../components/NavbarDashboard";
import { ContainerDev, ContainerOutlet } from "./style";
import { useUserContext } from "../../context/UserContext";
import ModalEditProfile from "./components/ModalEditProfile";
import ModalCreateResquest from "./components/ModalCreateResquest";
import ModalEditResquest from "./components/ModalEditRequest";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const Dashboard = () => {
  const { actualModalDashboard } = useUserContext();
  const objectUser = sessionStorage.getItem("@DevsHubUser");

  return (
    <>
      {objectUser ? (
        <>
          {actualModalDashboard == "editProfile" && <ModalEditProfile />}
          {actualModalDashboard == "createDemand" && <ModalCreateResquest />}
          {actualModalDashboard == "editDemand" && <ModalEditResquest />}
          <NavbarDashboard />
          <ContainerDev>
            <ContainerOutlet>
              <Outlet />
            </ContainerOutlet>
          </ContainerDev>
        </>
      ) : (
        <Navigate to={"/home"} />
      )}
    </>
  );
};

export default Dashboard;
