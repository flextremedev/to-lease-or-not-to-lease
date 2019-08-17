import { styled } from "../../theme";
type LabelProps = {
  invertColor?: boolean;
};
export const Label = styled.label<LabelProps>`
  display: inline-block;
  color: ${props =>
    props.invertColor
      ? props.theme.colors.onForegroundAlt
      : props.theme.colors.onForeground};
  font-family: ${props => props.theme.fonts.label.fontFamily}, sans-serif;
  font-weight: ${props => props.theme.fonts.label.fontWeight};
  font-size: ${props => props.theme.fonts.label.fontSize};
  line-height: ${props => props.theme.fonts.label.fontSize};
  max-height: ${props => props.theme.fonts.label.fontSize};
`;
