import { useEffect, useState } from "react";
import {ContainerProject,ContainerProjectEmpty,ContainerProjectUl} from "./style";
import { Text } from "../../../../styles/TypograpyText";
import { Api } from "../../../../services/api/api";
import { useNavigate } from "react-router-dom";
import ProjectsCard from "../ProjectsCard";
import {IDemandsResponse,IUserLogged} from "../../../../interface/TypesGlobal";
import { ButtonDefault } from "../../../../components/ButtonDefault/style";
import { useUserContext } from "../../../../context/UserContext";

const ProjetosAnteriores = () => {
  const navigate = useNavigate();
  const { user, setLoading } = useUserContext();
  const [filteredList, setFilteredList] = useState([] as IDemandsResponse[]);

  const listAllDemands = async () => {
    const user = sessionStorage.getItem("@DevsHubUser");
    const userSession: IUserLogged = JSON.parse(user as string);

    try {
      setLoading(true);
      const request = await Api.get("/jobs/?_expand=user");
      const response: IDemandsResponse[] = request.data;

      if (userSession.user?.type == "ong") {
        const filtered = response.filter(
          (elem) =>
            elem.dev_finished == true && elem.userId == userSession.user.id
        );
        setFilteredList(filtered);
        return;
      }

      const filtered = response.filter(
        (elem) =>
          elem.dev_finished == true &&
          elem.work_in?.find((elem) => elem.id == userSession.user?.id)
      );
      setFilteredList(filtered);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    listAllDemands();
  }, []);

  const handleHistoricButton = () => {
    if (user.user.type == "dev") {
      navigate("/dashboard/projetos");
    }
    navigate("/dashboard/atual");
  };

  return filteredList.length > 0 ? (
    <ContainerProject className="animate__animated animate__fadeIn">
      <Text fontSize="text3" color="success" className="message">
        Você já {user.user.type == "dev" ? "concluiu " : "teve"}{" "}
        {filteredList.length > 1
          ? `${filteredList.length} projetos`
          : "1 projeto"}{" "}
        {user.user.type == "dev"
          ? ", as ONGs agradecem"
          : "concluidos, compartilhe o trabalho dos devs para incentiva-los!"}
      </Text>
      <ContainerProjectUl>
        {filteredList.map((elem) => (
          <ProjectsCard key={elem.id} obj={elem} />
        ))}
      </ContainerProjectUl>
    </ContainerProject>
  ) : (
    <ContainerProjectEmpty className="animate__animated animate__fadeIn">
      <Text fontSize="text3" color="success" className="message">
        Você ainda não finalizou nenhum projeto
      </Text>
      <ButtonDefault
        color="grey1"
        bgColor="grey1"
        onClick={() => handleHistoricButton()}
      >
        {user.user?.type == "dev" ? "ESCOLHER PROJETO" : "MEU PROJETO"}
      </ButtonDefault>
    </ContainerProjectEmpty>
  );
};

export default ProjetosAnteriores;
