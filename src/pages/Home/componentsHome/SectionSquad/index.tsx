import { Text } from "../../../../styles/TypograpyText";
import { ContainerEquipe, ContainerSquadIntern } from "./style";
import { productCreators } from "../../../../services/infos";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export const SectionSquad = () => {
  return (
    <ContainerEquipe className="animate__animated animate__fadeIn">
      <ContainerSquadIntern>
        <Text tag="h1" color="primary" fontSize="title2">
          EQUIPE DE DESENVOLVEDORES
        </Text>
        <ul>
          {productCreators.map(
            ({ name, email, linkedin, gitHub, instagram }, index) => {
              return (
                <li key={index}>
                  <div className="left__div">
                    <Text fontSize="text1" color="negative">
                      {name}
                    </Text>
                    <Text color="negative">{email}</Text>
                  </div>

                  <div className="right__div">
                    {linkedin && (
                      <a target="_blank" href={linkedin}>
                        <LinkedInIcon />
                      </a>
                    )}

                    {gitHub && (
                      <a target="_blank" href={gitHub}>
                        <GitHubIcon />
                      </a>
                    )}

                    {instagram && (
                      <a target="_blank" href={instagram}>
                        <InstagramIcon />
                      </a>
                    )}
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </ContainerSquadIntern>
    </ContainerEquipe>
  );
};
