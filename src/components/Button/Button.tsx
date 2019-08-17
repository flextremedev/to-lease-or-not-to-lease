import * as React from "react";
import { styled } from "../../theme";
import {
  handleBackground,
  handleBorder,
  handleColor,
  handleBoxShadow,
  handleTextShadow,
} from "./style-helpers";
export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "contained" | "outline" | "text";
  fullWidth?: boolean;
  /**
   * Inverts color of label for text variants.
   */
  invertColor?: boolean;
};
type ButtonStyledProps = Pick<
  ButtonProps,
  "variant" | "fullWidth" | "invertColor"
>;
const ButtonStyled = styled.button<ButtonStyledProps>`
  background-color: ${props => handleBackground(props)};
  border: 2px solid ${props => handleBorder(props)};
  color: ${props => handleColor(props)};
  font-family: ${props => props.theme.fonts.button.fontFamily}, sans-serif;
  font-weight: ${props => props.theme.fonts.button.fontWeight};
  font-size: ${props => props.theme.fonts.button.fontSize};
  height: 44px;
  padding: 0px 20px;
  outline: none;
  width: ${props => (props.fullWidth ? "100%" : "auto")};
  cursor: pointer;
  :hover {
    box-shadow: ${props => handleBoxShadow(props, true)};
    text-shadow: ${props => handleTextShadow(props)};
  }
  :focus {
    box-shadow: ${props => handleBoxShadow(props, true)};
    text-shadow: ${props => handleTextShadow(props)};
    border-color: ${props => handleBorder(props, false, true)};
  }
  :active {
    background-color: ${props => handleBackground(props, true)};
    border-color: ${props => handleBorder(props, true, false)};
    color: ${props => handleColor(props, true)};
    box-shadow: none;
    text-shadow: none;
  }
`;
export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "contained",
  fullWidth,
  invertColor,
}) => {
  return (
    <ButtonStyled
      onClick={onClick}
      variant={variant}
      fullWidth={fullWidth}
      invertColor={invertColor}
    >
      {children}
    </ButtonStyled>
  );
};
