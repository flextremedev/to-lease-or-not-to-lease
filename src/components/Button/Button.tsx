import * as React from "react";
import { styled } from "../../theme";
type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const ButtonStyled = styled.button`
  background-color: ${props => props.theme.colors.button.background.color};
  border: 2px solid ${props => props.theme.colors.button.background.color};
  color: ${props => props.theme.colors.button.foreground.color};
  font-family: ${props => props.theme.fonts.button.fontFamily}, sans-serif;
  font-weight: ${props => props.theme.fonts.button.fontWeight};
  font-size: ${props => props.theme.fonts.button.fontSize};
  height: 44px;
  padding: 0px 20px;
  outline: none;
  width: 100%;
  :hover {
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25),
      0px 4px 6px 0px rgba(0, 0, 0, 0.33);
  }
  :active {
    background-color: ${props => props.theme.colors.button.background.active};
  }
  :focus {
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.21),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 6px 0px rgba(0, 0, 0, 0.33);
  }
`;
export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};
