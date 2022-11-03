export interface IChildrenNode {
  children: React.ReactNode;
}

export interface IUserContextProvider {
  actualSectionHome: string;
  setActualSectionHome: React.Dispatch<React.SetStateAction<string>>;
}
