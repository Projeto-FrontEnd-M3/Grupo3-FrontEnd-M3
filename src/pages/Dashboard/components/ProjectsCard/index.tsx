import { ContainerProjectLi } from "../ProjetosAnteriores/style";
import IconImage from "../../../../assets/IconImage.png";
import { Text } from "../../../../styles/TypograpyText";
import { IDemandsResponse } from "../../../../interface/TypesGlobal";

interface IProjectsCard {
  obj: IDemandsResponse
}

const ProjectsCard = ({ obj }: IProjectsCard) => {
  return (
    <ContainerProjectLi>
      <div className="title">
        <Text fontSize="text2" color="grey1">
          {obj.user.name}
        </Text>
        <Text fontSize="text2" color="grey1">
          ENTREGUE EM: <span>{obj.finished_at}</span>
        </Text>
      </div>
      <div className="resume">
        <figure>
          <img src={obj.user.image ? obj.user.image : IconImage} alt="Imagem de teste" />
        </figure>
        <Text fontSize="text4" color="grey1">
          {obj.description}
        </Text>
      </div>
    </ContainerProjectLi>
  );
};

export default ProjectsCard;
