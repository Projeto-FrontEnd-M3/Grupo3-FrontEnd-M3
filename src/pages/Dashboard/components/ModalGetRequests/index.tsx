import { ContainerModal } from "../../../../components/ContainerModal/style";
import { ContainerModalGetRequest, ModalContent } from "./style";
import { Text } from "../../../../styles/TypograpyText";
import { ButtonDefault } from "../../../../components/ButtonDefault/style";


const ModalGetRequests = () => {
  return (
    <ContainerModal>
      <ContainerModalGetRequest>
        <ModalContent>
          <Text tag="h1" fontSize="title1" color="primary">
            Pedido
          </Text>

          <Text tag="h1" fontSize="title2" color="primary">
            Nome da ONG
          </Text>

          <Text color="primary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>

          <Text color="primary">
            Prazo de entrega: <b>11/10/2023</b>
          </Text>

          <ButtonDefault bgColor="primary" color="primary">
            Aceitar
          </ButtonDefault>

          <button className="buttonClosed">X</button>
        </ModalContent>
      </ContainerModalGetRequest>
    </ContainerModal>
  );
};

export default ModalGetRequests;
