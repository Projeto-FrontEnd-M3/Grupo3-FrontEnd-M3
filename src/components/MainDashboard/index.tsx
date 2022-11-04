import { MainStyled } from "./styles";

interface IMainDashboard {
  children: React.ReactNode;
}

const MainDashboard = ({ children }: IMainDashboard) => {
  return <MainStyled>{children}</MainStyled>;
};

export default MainDashboard;
