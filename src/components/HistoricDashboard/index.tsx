import { Text } from "../../styles/TypograpyText";
import { HistoricContainer } from "./styles";

const list = [];

interface IHistoricDashboard {
  emptyListMessage: string;
}

const HistoricDashboard = ({ emptyListMessage }: IHistoricDashboard) => {
  return (
    <HistoricContainer>
      <Text tag="h2" fontSize="title3" color="primary">
        Histórico
      </Text>
      <ul>
        {list.length == 0 && (
          <div className="historic__list--empty">
            <Text tag="p" color="grey3">
              Atualmente você não possui nenhum projeto.
            </Text>
            <Text tag="p" color="grey3">
              {emptyListMessage}
            </Text>
          </div>
        )}
      </ul>
    </HistoricContainer>
  );
};

export default HistoricDashboard;
