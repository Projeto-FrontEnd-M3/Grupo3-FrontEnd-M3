import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonDefault } from "../../../../components/ButtonDefault/style";
import { useUserContext } from "../../../../context/UserContext";
import { IDemandsResponse } from "../../../../interface/TypesGlobal";
import { Api } from "../../../../services/api/api";
import { Text } from "../../../../styles/TypograpyText";
import { ProjetoAtualCard } from "../ProjetoAtualCard";
import { ContainerProjectEmpty } from "../ProjetosAnteriores/style";

export const ProjetoAtual = () => {
  const { setFilteredListAux, setactualModalDashboard, user, setLoading } =
    useUserContext();

  if (!user.user) {
    return null;
  }

  const navigate = useNavigate();
  const [filteredList, setFilteredList] = useState([] as IDemandsResponse[]);

  useEffect(() => {
    const listAllDemands = async () => {
      setLoading(true);
      try {
        const request = await Api.get("/jobs/?_expand=user");
        const response: IDemandsResponse[] = request.data;

        if (user.user.type == "ong") {
          const filtered = response.filter(
            (elem) =>
              elem.status == "Em Andamento" ||
              (elem.status == "Pendente" && elem.userId == user.user.id)
          );

          setFilteredList(filtered);
          setFilteredListAux(filtered);
          return;
        }

        const filtered = response.filter(
          (elem) =>
            elem.status == "Em Andamento" &&
            elem.work_in.find((dev) => dev.id == user.user.id)
        );

        setFilteredList(filtered);
        setFilteredListAux(filtered);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    listAllDemands();
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
    <ProjetoAtualCard obj={filteredList[0]} />
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
        {user.user.type == "dev" ? "PEGAR UM PROJETO" : "CRIAR PROJETO"}
      </ButtonDefault>
    </ContainerProjectEmpty>
  );
};
