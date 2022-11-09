import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonDefault } from "../../../../components/ButtonDefault/style";
import { useUserContext } from "../../../../context/UserContext";
import {
  IDemandsResponse,
  IUserLogged,
} from "../../../../interface/TypesGlobal";
import { Api } from "../../../../services/api/api";
import { Text } from "../../../../styles/TypograpyText";
import { ProjetoAtualCard } from "../ProjetoAtualCard";
import { ContainerProjectEmpty } from "../ProjetosAnteriores/style";

export const ProjetoAtual = () => {
  const navigate = useNavigate();
  const [filteredList, setFilteredList] = useState([] as IDemandsResponse[]);

  const { setFilteredListAux } = useUserContext();

  useEffect(() => {
    const sessionUser = sessionStorage.getItem("@DevsHubUser");
    const user: IUserLogged = JSON.parse(sessionUser as string);

    const listAllDemands = async () => {
      try {
        const request = await Api.get("/jobs/?_expand=user");
        const response: IDemandsResponse[] = request.data;

        const filtered = response.filter(
          (elem) =>
            elem.status == "Em Andamento" &&
            elem.work_in.find((dev) => dev.id == user.user.id)
        );

        setFilteredList(filtered);
        setFilteredListAux(filtered);
      } catch (error) {
        console.log(error);
      }
    };
    listAllDemands();
  }, [filteredList]);

  return filteredList.length > 0 ? (
    <ProjetoAtualCard obj={filteredList[0]} />
  ) : (
    <ContainerProjectEmpty>
      <Text fontSize="text3" color="success" className="message">
        Você ainda não iniciou nenhum projeto
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
