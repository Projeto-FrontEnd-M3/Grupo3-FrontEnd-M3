import { ButtonDefault } from "../../../../components/ButtonDefault/style";
import { Text } from "../../../../styles/TypograpyText";

const CarouselCard = ({ obj }) => {
    return (
      <div>
        <div>
            <Text tag="h2" color="primary" fontSize="title3">Pedido</Text>
            <Text>Entregar até: {obj.estimated_time}</Text>
        </div>
        <Text>{obj.description}</Text>
        <ButtonDefault color="primary" bgColor="primary">
            PEGAR PROJETO
          </ButtonDefault>
      </div>
    );
  };
  
  export default CarouselCard;
  