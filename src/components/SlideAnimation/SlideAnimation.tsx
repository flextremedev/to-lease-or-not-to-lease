import { styled, Theme } from "../../theme";
import { ThemedStyledProps } from "styled-components";

type SlideAnimationProps = {
  condition?: boolean;
  xAmount?: number;
  yAmount?: number;
  /**
   * Duration in ms.
   */
  duration?: number;
};
const handleTranslate = (
  props: ThemedStyledProps<SlideAnimationProps, Theme>
) => {
  if (props.condition) {
    return `translate(${props.xAmount || 0}px, ${props.yAmount || 0}px)`;
  }
  return "none";
};
const handleTransition = (
  props: ThemedStyledProps<SlideAnimationProps, Theme>
) => `transform ${props.duration ? props.duration : 0}ms ease-in`;

export const SlideAnimation = styled.div<SlideAnimationProps>`
  display: inline-block;
  transform: ${props => handleTranslate(props)};
  transition: ${props => handleTransition(props)};
`;
