import { Text } from "../../../../styles/TypograpyText";
import { ContainerEquipe } from "./style";
import { productCreators } from "../../../../services/infos";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export const SectionEquipe = () => {
  return (
    <ContainerEquipe>
      <Text tag="h1" color="negative" fontSize="title1">
        Equipe de Desenvolvedores
      </Text>

      <ul>
        {productCreators.map(({ name, email, linkedin, gitHub, instagram }, index) => {
          return (
            <li key={index}>
              <div className="left__div">
                <Text color="primary">{name}</Text>
                <Text color="primary">{email}</Text>
              </div>

              <div>
                <a target='_blank' href={linkedin}>
                  <LinkedInIcon />
                </a>

                <a target='_blank' href={gitHub}>
                  <GitHubIcon />
                </a>

                <a target='_blank' href={instagram}>
                  <InstagramIcon />
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </ContainerEquipe>
  );
};
