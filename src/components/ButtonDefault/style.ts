import styled from "styled-components";
import { IColor } from "../../interface/TypeGlobalStyles";
import { setColors } from "../../styles/components/Colors/colors";

interface IButtonDefaultProps {
  color: IColor;
  bgColor: IColor;
}

export const ButtonDefault = styled.button`
  width: 100%;
  height: 3.5rem;
  color: ${({ color }: IButtonDefaultProps) => setColors(color)};
  border: 2px solid ${({ bgColor }: IButtonDefaultProps) => setColors(bgColor)};
  font-size: 1.5rem;
  transition: 0.3s;

  :hover {
    box-shadow: 1px 1px 15px;
  }
`;
