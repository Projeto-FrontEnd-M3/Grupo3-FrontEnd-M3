import { useEffect, useState } from "react";
import {
  ContainerProject,
  ContainerProjectEmpty,
  ContainerProjectUl,
} from "./style";
import { Text } from "../../../../styles/TypograpyText";
import { Api } from "../../../../services/api/api";
import { ButtonDefault } from "../../../../components/ButtonDefault/style";
import { useNavigate } from "react-router-dom";
import ProjectsCard from "../ProjectsCard";
import {
  IDemandsResponse,
  IUserLogged,
} from "../../../../interface/TypesGlobal";

const ProjetosAnteriores = () => {
  const navigate = useNavigate();

  const [filteredList, setFilteredList] = useState([] as IDemandsResponse[]);

  useEffect(() => {
    const sessionUser = sessionStorage.getItem("@DevsHubUser");
    const user: IUserLogged = JSON.parse(sessionUser as string);

    const listAllDemands = async () => {
      try {
        const request = await Api.get("/jobs/?_expand=user");
        const response: IDemandsResponse[] = request.data;
        
        const filtered = response.filter(
          (elem) => elem.dev_finished == true && elem.work_in?.find(elem => elem.id == user.user.id)
        );
        setFilteredList(filtered);

      } catch (error) {
        console.log(error);
      }
    };
    listAllDemands();
  }, []);

  return filteredList.length > 0 ? (
    <ContainerProject>
      <Text fontSize="text3" color="success" className="message">
        Você já concluiu{" "}
        {filteredList.length > 1
          ? `${filteredList.length} projetos`
          : "1 projeto"}
        , as ONGs agradecem
      </Text>
      <ContainerProjectUl>
        {filteredList.map((elem) => (
          <ProjectsCard key={elem.id} obj={elem} />
        ))}
      </ContainerProjectUl>
    </ContainerProject>
  ) : (
    <ContainerProjectEmpty>
      <Text fontSize="text3" color="success" className="message">
        Você ainda não finalizou nenhum projeto
      </Text>
      <ButtonDefault
        color="primary"
        bgColor="primary"
        onClick={() => navigate("/dashboard/projetos")}
      >
        PEGAR UM PROJETO
      </ButtonDefault>
    </ContainerProjectEmpty>
  );
};

export default ProjetosAnteriores;
