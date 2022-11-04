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

export const ProjetoAtual = () => {
  return (
    <ContainerProject>
      <ContainerProjectLeft>
        <ContainerProjectLeftResume>
          <ContainerProjectLeftTitle>
            <Text fontSize="text1" color="success">
              P E D I D O
            </Text>
            <Text fontSize="text2" color="success">
              Entregar até <span>09/09/1999</span>
            </Text>
          </ContainerProjectLeftTitle>
          <Text fontSize="text4" color="grey1">
            Preciso de um site que nossos doadores possam ver os eventos da ONG
            e conﬁrmar presença. E que os eventos tenham um número máximo de
            pessoas que possam comparerecer
          </Text>
        </ContainerProjectLeftResume>
        <ContainerProjectLefButton>
          <ButtonDefault color="primary" bgColor="primary">
            CONCLUIR PROJETO
          </ButtonDefault>
        </ContainerProjectLefButton>
      </ContainerProjectLeft>
      <ContainerProjectDiv></ContainerProjectDiv>
      <ContainerProjecRight>
        <ContainerProjecRightInfo>
          <ContainerProjecRightTitle>
            <Text fontSize="text2" color="success" className="titlespace">
              <span>NOME DA ONG</span>
            </Text>
            <Text fontSize="text2" color="success">
              aguarda o projeto
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
              algumnome@gmail.com
            </Text>
          </li>
          <li>
            <WhatsAppIcon />
            <Text fontSize="text4" color="success">
              (11) 99999-9999
            </Text>
          </li>
          <li>
            <PhoneInTalkIcon />
            <Text fontSize="text4" color="success">
              (11) 9999-9999
            </Text>
          </li>
        </ContainerProjecRightContacts>
        <ContainerProjecRightText>
          <Text fontSize="text4" color="success">
            Você pode entrar em contato com o dev responsável pelos meios acima{" "}
          </Text>
        </ContainerProjecRightText>
      </ContainerProjecRight>
    </ContainerProject>
  );
};
