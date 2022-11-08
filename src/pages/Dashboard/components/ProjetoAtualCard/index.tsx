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
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { ButtonDefault } from "../../../../components/ButtonDefault/style";
import { Text } from "../../../../styles/TypograpyText";
import { IDemandsResponse } from "../../../../interface/TypesGlobal";

interface IProjetoAtualCard {
  obj: IDemandsResponse;
}

export const ProjetoAtualCard = ({ obj }: IProjetoAtualCard) => {
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
          <Text fontSize="text4" color="grey1" className="resumesize">
            {obj.description}
          </Text>
        </ContainerProjectLeftResume>
        <ContainerProjectLefButton>
          <ButtonDefault color="success" bgColor="success">
            {obj.status == "Pendente" ? "ACEITAR PROJETO" : "CONCLUIR PROJETO"}
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
            Ultilize esses meios de contato para conversar com a ONG
          </Text>
        </ContainerProjecRightText>
      </ContainerProjecRight>
    </ContainerProject>
  );
};
