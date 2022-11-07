import React from "react";
import { Outlet } from "react-router-dom";
import { NavbarDashboard } from "../../components/NavbarDashboard";
import { ContainerDev, ContainerOutlet } from "./style";
import { useUserContext } from "../../context/UserContext";
import ModalEditProfile from "./components/ModalEditProfile";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const fakedb = [
  {
    title: "Titulo do Projeto",
    description: "Descrição do projeto",
    status: "Pendente",
    userId: "6",
    project_type: "Web | Mobile | Desktop",
    created_at: "31/10/2022",
    estimated_time: "30/11/2022",
    id: 1,
    user: {
      email: "ong@teste.com",
      password: "$2a$10$z8WIZWS7dw4hi3jEDUVhT.kfyvP7zFcF5Xyw9qeni/s5NrUuVJW8.",
      cnpj: "08179183000166",
      name: "Organização sem fins lucrativo",
      type: "ong",
      id: 6,
    },
  },
  {
    title: "Página Institucional",
    description:
      "Precisamos de uma pagina com uma apresentação inicial do nosso trabalho. Também precisamos de alguns botões onde tenha um redirecionamento para as nossas redes, e para uma area com uma descrição completa e informações sobre a nossa ONG",
    status: "Em Andamento",
    userId: "8",
    project_type: "Web",
    created_at: "31/10/2022",
    estimated_time: "20/12/2022",
    id: 2,
    work_in: [
      {
        email: "dev@dev.com",
        name: "Desenvolvedor",
        type: "dev",
        id: 9,
      },
    ],
    user: {
      email: "ongimaginaria@teste.com",
      password: "$2a$10$0SWrwgyEfonZbGofaye1quJmQRa7ZWKgs/dX7S69r4HkdNUYD9kqG",
      cnpj: "35634896347000",
      name: "ONG Imaginária",
      type: "ong",
      id: 8,
    },
  },
];
const filteredArray = fakedb.filter((elem) => elem.status == "Em Andamento");

const Dashboard = () => {
  const { actualModalDashboard } = useUserContext();

  return (
    <>
      {actualModalDashboard == "editProfile" && <ModalEditProfile />}
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
