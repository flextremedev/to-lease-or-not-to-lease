import { styled } from "../../theme";
type ParagraphProps = {
  invertColor?: boolean;
};
export const Paragraph = styled.p<ParagraphProps>`
  font-size: ${props => props.theme.fonts.paragraph.fontSize};
  font-family: ${props => props.theme.fonts.paragraph.fontFamily};
  font-weight: ${props => props.theme.fonts.paragraph.fontWeight};
  color: ${props =>
    !props.invertColor
      ? props.theme.colors.onForeground
      : props.theme.colors.onForegroundAlt};
  margin: 0;
  margin-bottom: ${props => props.theme.spaces.xl};
  padding: 0;
`;
