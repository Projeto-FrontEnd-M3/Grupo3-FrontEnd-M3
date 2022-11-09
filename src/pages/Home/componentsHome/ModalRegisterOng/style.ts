import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";

export const BackButton = styled(ArrowBackIcon)`
  position: absolute;
  top: 5px;
  left: 5px;
  font-size: 20px;
  color: var(--color-grey-2);
  cursor: pointer;
`;

export const CloseButton = styled(CloseIcon)`
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 20px;
  color: var(--color-grey-2);
  cursor: pointer;
`;
