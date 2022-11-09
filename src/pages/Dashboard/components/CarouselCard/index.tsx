import { ButtonDefault } from "../../../../components/ButtonDefault/style";
import { Text } from "../../../../styles/TypograpyText";

const CarouselCard = ({ obj }) => {
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
<<<<<<< HEAD
        PEGAR PROJETO
=======
        ESCOLHER PROJETO
>>>>>>> 82f1664884b9de4fe913865650de948cda180cc6
      </ButtonDefault>
    </div>
  );
};

export default CarouselCard;
