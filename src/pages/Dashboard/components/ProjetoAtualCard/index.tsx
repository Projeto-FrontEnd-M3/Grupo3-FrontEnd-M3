import {
  ContainerProjecRight,
  ContainerProjecRightContacts,
  ContainerProjecRightInfo,
  ContainerProjecRightText,
  ContainerProjecRightTitle,
  ContainerProject,
  ContainerProjectDiv,
  ContainerProjectLefButton,
  ContainerProjectLeft,
  ContainerProjectLeftResume,
  ContainerProjectLeftTitle,
} from "./style";
import IconImage from "../../../../assets/IconImage.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { ButtonDefault } from "../../../../components/ButtonDefault/style";
import { Text } from "../../../../styles/TypograpyText";
import {
  IDemandsResponse,
  IUserLogged,
} from "../../../../interface/TypesGlobal";
import { Api } from "../../../../services/api/api";
import { useUserContext } from "../../../../context/UserContext";
import { toastError } from "../../../../styles/components/Toastify/toast";
import { useLocation, useNavigate } from "react-router-dom";
import { IMap } from "../ModalCreateResquest";

interface IProjetoAtualCard {
  obj: IDemandsResponse;
}

const sessionUser = sessionStorage.getItem("@DevsHubUser");
const user: IUserLogged = JSON.parse(sessionUser as string);

const joinProject = async (id: number) => {
  const body = {
    status: "Em Andamento",
    work_in: [
      {
        email: user.user.email,
        name: user.user.name,
        id: user.user.id,
      },
    ],
  };

  try {
    const request = await Api.patch(`/jobs/${id}`, body);
  } catch (error) {
    console.log(error);
  }
};

const formatDate = () => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  const map: IMap = {
    mm: today.getMonth() + 1,
    dd: today.getDate(),
    aa: today.getFullYear().toString().slice(-2),
    aaaa: today.getFullYear(),
  };

  return `${map.dd}/${map.mm}/${map.aaaa}`;
};

const finishProject = async (id: number) => {
  const body = {
    status: "Finalizado",
    dev_finished: true,
    finished_at: formatDate(),
  };

  try {
    const request = await Api.patch(`/jobs/${id}`, body);
  } catch (error) {
    console.log(error);
  }
};

export const ProjetoAtualCard = ({ obj }: IProjetoAtualCard) => {
  const navigate = useNavigate();

  const { filteredListAux } = useUserContext();
  const { pathname } = useLocation();

  const handleButton = (projectId: number) => {
    if (pathname == "/dashboard/atual") {
      return finishProject(projectId);
    }

    if (user.user.type == "dev" && filteredListAux.length > 0) {
      return toastError("É permitido apenas um projeto ativo por usuário");
    }

    if (user.user.type == "dev") {
      joinProject(projectId);
      navigate("/dashboard/atual");
    }
  };

  return (
    <ContainerProject>
      <ContainerProjectLeft>
        <ContainerProjectLeftResume>
          <ContainerProjectLeftTitle>
            <Text fontSize="text1" color="success">
              P E D I D O
            </Text>
            <Text fontSize="text2" color="success">
              Entregar até <span>{obj.estimated_time}</span>
            </Text>
          </ContainerProjectLeftTitle>
          <Text fontSize="text4" color="grey1">
            {obj.description}
          </Text>
        </ContainerProjectLeftResume>
        <ContainerProjectLefButton>
          <Text fontSize="text3">Tipo do Projeto: {obj.project_type}</Text>
          <ButtonDefault
            onClick={() => handleButton(obj.id)}
            color="primary"
            bgColor="primary"
          >
            {obj.status == "Pendente" ? "PEGAR PROJETO" : "CONCLUIR PROJETO"}
          </ButtonDefault>
        </ContainerProjectLefButton>
      </ContainerProjectLeft>
      <ContainerProjectDiv></ContainerProjectDiv>
      <ContainerProjecRight>
        <ContainerProjecRightInfo>
          <ContainerProjecRightTitle>
            <Text fontSize="text2" color="success" className="titlespace">
              <span>{obj.user.name}</span>
            </Text>
            <Text fontSize="text2" color="success">
              {obj.status}
            </Text>
          </ContainerProjecRightTitle>
          <figure>
            <img src={IconImage} alt="Imagem de teste" />
          </figure>
        </ContainerProjecRightInfo>
        <ContainerProjecRightContacts>
          <li>
            <MailOutlineIcon />
            <Text fontSize="text4" color="success">
              {obj.user.email}
            </Text>
          </li>
          {obj.user.phone && (
            <li>
              <PhoneInTalkIcon />
              <Text fontSize="text4" color="success">
                {obj.user.phone}
              </Text>
            </li>
          )}
        </ContainerProjecRightContacts>
        <ContainerProjecRightText>
          <Text fontSize="text4" color="success">
            Você pode entrar em contato com ONG pelos meios acima
          </Text>
        </ContainerProjecRightText>
      </ContainerProjecRight>
    </ContainerProject>
  );
};
