import * as React from "react";
import { styled } from "../../theme";
type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const ButtonStyled = styled.button`
  background-color: ${props => props.theme.primary.base};
  border: 2px solid ${props => props.theme.primary.base};
  color: ${props => props.theme.onPrimary};
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 16px;
  height: 44px;
  padding: 0px 20px;
  outline: none;
  border-radius: 4px;
  :hover {
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.25),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 4px 0px rgba(0, 0, 0, 0.12);
  }
  :active {
    background-color: ${props => props.theme.primary.darker};
  }
  :focus {
    border-color: ${props => props.theme.primary.darker};
  }
`;
export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};
