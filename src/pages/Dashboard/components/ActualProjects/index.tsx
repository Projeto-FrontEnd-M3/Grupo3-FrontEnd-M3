import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonDefault } from "../../../../components/ButtonDefault/style";
import { useUserContext } from "../../../../context/UserContext";
import { IUserLogged } from "../../../../interface/TypesGlobal";
import { Text } from "../../../../styles/TypograpyText";
import { ProjetoAtualCard } from "../ActualProjectsCard";
import { ContainerProjectEmpty } from "../PreviousProjects/style";

export const ProjetoAtual = () => {
  const { setactualModalDashboard, listAllActualDemands, filteredList } =
    useUserContext();

  const navigate = useNavigate();

  const sessionUser = sessionStorage.getItem("@DevsHubUser");
  const user: IUserLogged = JSON.parse(sessionUser as string);

  useEffect(() => {
    listAllActualDemands();
  }, []);

  const handleEmptyListButton = () => {
    if (user.user.type == "dev") {
      return navigate("/dashboard/projetos");
    }

    if (user.user.type == "ong") {
      return setactualModalDashboard("createDemand");
    }
  };
  return filteredList.length > 0 ? (
    <ProjetoAtualCard
      listAllDemands={listAllActualDemands}
      obj={filteredList[0]}
    />
  ) : (
    <ContainerProjectEmpty className="animate__animated animate__fadeIn">
      <Text fontSize="text3" color="success" className="message">
        Você ainda não iniciou nenhum projeto
      </Text>
      <ButtonDefault
        color="grey1"
        bgColor="grey1"
        onClick={() => handleEmptyListButton()}
      >
        {user.user.type == "dev" ? "ESCOLHER PROJETO" : "CRIAR PROJETO"}
      </ButtonDefault>
    </ContainerProjectEmpty>
  );
};
