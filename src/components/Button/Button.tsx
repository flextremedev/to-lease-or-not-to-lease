import * as React from "react";
import { styled } from "../../theme";

type ButtonProps = {
  children?: string;
};
const ButtonStyled = styled.button`
  background-color: ${props => props.theme.primary.base};
  border: none;
  color: ${props => props.theme.onPrimary};
  font-size: 16px;
  height: 48px;
  padding: 0px 24px;
  outline: none;
  :hover {
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
  }
  :active {
    background-color: ${props => props.theme.primary.darker};
  }
`;

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};
