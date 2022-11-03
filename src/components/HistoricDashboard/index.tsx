import { TitleComponent } from "../../styles/components/Typography";

const HistoricDashboard = (props) => {
  return (
    <div>
      <TitleComponent>Histórico</TitleComponent>
      <ul>
        {props.list.length == 0 && (
            <>
                <TitleComponent tag="p" color="primary">
                Atualmente você não possui nenhum projeto.
                </TitleComponent>
                <TitleComponent tag="p" color="primary">
                    Para iniciar um novo, basta aceitar um projeto da lista ao lado.
                </TitleComponent>
            </>
        )}
      </ul>
    </div>
  );
};

export default HistoricDashboard;
