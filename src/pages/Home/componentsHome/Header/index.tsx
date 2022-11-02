import AppBar from "@mui/material/AppBar";

import Button from "@mui/material/Button";

import { Text } from "../../../../styles/TypograpyText";
import { HeaderStyle } from "./style";

export const Header = () => {
  return (
    <HeaderStyle>
      <AppBar position="static">
        <div className="divLogo">
          <img src="" alt="Logo" />
          <Text tag="h1" color="secundary">
            Nome do Site
          </Text>
        </div>
        <div>
          <Button>EQUIPE</Button>
          <Text tag="span" color="primary">
            |
          </Text>
          <Button>COMO FUNCIONA</Button>
          <Text tag="span" color="primary">
            |
          </Text>
          <Button>LOGIN</Button>
        </div>
      </AppBar>
    </HeaderStyle>
  );
};
