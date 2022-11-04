import { Header } from "./componentsHome/Header";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default HomePage;
