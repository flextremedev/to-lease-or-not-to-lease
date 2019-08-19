import { styled, Theme } from "../../theme";
import { ThemedStyledProps, keyframes } from "styled-components";

type SlideAnimationProps = {
  /**
   * **CUSTOM PROP**: Condition to start animation.
   */
  condition?: boolean;
  /**
   * **CUSTOM PROP**: Animate to original position. Usage without condition not recommended.
   */
  useAsFrom?: boolean;
  /**
   * **CUSTOM PROP**: x-amount of animation.
   */
  xAmount?: number;
  /**
   * **CUSTOM PROP**: y-amount of animation.
   */
  yAmount?: number;
  /**
   * **CUSTOM PROP**: Full width.
   */
  fullWidth?: boolean;
  /**
   * **CUSTOM PROP**: Duration in ms.
   */
  duration?: number;
};
const createFadeInReverse = (props: SlideAnimationProps) => keyframes`
  from {
    transform: translate(${props.xAmount || 0}px, ${props.yAmount}px);
  }

  to {
    transform: translate(0);
  }
`;
const createFadeIn = (props: SlideAnimationProps) => keyframes`
  from {
    transform: translate(0);
  }

  to {
    transform: translate(${props.xAmount}px, ${props.yAmount}px);
  }
`;
const handleTranslate = (
  props: ThemedStyledProps<SlideAnimationProps, Theme>
) => {
  if (props.condition) {
    if (props.useAsFrom) {
      return "none";
    }
    return `translate(${props.xAmount || 0}px, ${props.yAmount || 0}px)`;
  }
  if (props.useAsFrom) {
    return `translate(${props.xAmount || 0}px, ${props.yAmount || 0}px)`;
  }
  return "none";
};
const handleTransition = (
  props: ThemedStyledProps<SlideAnimationProps, Theme>
) => `transform ${props.duration ? props.duration : 0}ms ease`;

export const SlideAnimation = styled.div<SlideAnimationProps>`
  display: flex;
  justify-content: inherit;
  transform: ${props => handleTranslate(props)};
  transition: ${props => handleTransition(props)};
  height: ${props => (props.condition && !props.useAsFrom ? "0px" : "auto")};
  width: ${props => (props.fullWidth ? "100%" : "auto")};
  animation: ${props =>
      props.useAsFrom ? createFadeInReverse(props) : createFadeIn(props)}
    ${props => props.duration}ms ease;
`;
