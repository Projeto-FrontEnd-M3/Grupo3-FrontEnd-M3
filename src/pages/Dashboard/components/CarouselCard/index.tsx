import { ButtonDefault } from "../../../../components/ButtonDefault/style";
import { Text } from "../../../../styles/TypograpyText";
import { IProjectsCard } from "../ProjectsCard";

const CarouselCard = ({ obj }: IProjectsCard) => {
  return (
    <div>
      <div>
        <Text tag="h2" color="primary" fontSize="title3">
          Pedido
        </Text>
        <Text>Entregar até: {obj.estimated_time}</Text>
      </div>
      <Text>{obj.description}</Text>
      <ButtonDefault color="primary" bgColor="primary">
        ESCOLHER PROJETO
      </ButtonDefault>
    </div>
  );
};

export default CarouselCard;
