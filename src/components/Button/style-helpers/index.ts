import { ButtonProps } from "../Button";
import { ThemedStyledProps } from "styled-components";
import { Theme } from "../../../theme";
const boxShadow =
  "0px 1px 4px 0px rgba(5, 82, 181, 0.21), 0px 2px 8px 0px rgba(5, 82, 181, 0.14), 0px 3px 16px 0px rgba(5, 82, 181, 0.33)";
export type ButtonStyledProps = ThemedStyledProps<
  Pick<ButtonProps, "variant" | "invertColor">,
  Theme
>;
export const handleBackground = (
  props: ButtonStyledProps,
  isActive?: boolean
) => {
  if (props.variant === "outline" || props.variant === "text") {
    return "rgba(0,0,0,0)";
  } else if (isActive) {
    return props.theme.colors.button.background.active;
  }
  return props.theme.colors.button.background.color;
};
export const handleBorder = (
  props: ButtonStyledProps,
  isActive?: boolean,
  isFocus?: boolean
) => {
  if (props.variant === "text") {
    return "rgba(0,0,0,0)";
  } else if (isActive || isFocus) {
    return props.theme.colors.button.background.active;
  }
  return props.theme.colors.button.background.color;
};
export const handleColor = (props: ButtonStyledProps, isActive?: boolean) => {
  if (props.variant === "outline" || props.variant === "text") {
    if (props.variant === "text") {
      if (props.invertColor) {
        return props.theme.colors.button.foreground.colorAlt;
      }
    }
    if (isActive) {
      return props.theme.colors.button.background.active;
    }
    return props.theme.colors.button.background.color;
  }
  return props.theme.colors.button.foreground.color;
};
export const handleBoxShadow = (
  props: ButtonStyledProps,
  showShadow?: boolean
) => {
  if (props.variant === "text" || !showShadow) {
    return "none";
  }
  return boxShadow;
};
export const handleTextShadow = (props: ButtonStyledProps) => {
  if (props.variant === "text") {
    return "0px 2px 3px rgba(0,0,0,0.52)";
  }
  return "none";
};
