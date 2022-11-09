interface IMainDashboard {
  children: React.ReactNode;
}

const MainDashboard = ({ children }: IMainDashboard) => {
  return <main>{children}</main>;
};

export default MainDashboard;
