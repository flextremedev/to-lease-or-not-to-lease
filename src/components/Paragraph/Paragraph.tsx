import { styled } from "../../theme";
type ParagraphProps = {
  invertColor?: boolean;
};
export const Paragraph = styled.p<ParagraphProps>`
  font-size: ${props => props.theme.fonts.paragraph.fontSize};
  font-family: ${props => props.theme.fonts.paragraph.fontFamily};
  font-weight: ${props => props.theme.fonts.paragraph.fontWeight};
  line-height: 1.625rem;
  color: ${props =>
    !props.invertColor
      ? props.theme.colors.onForeground
      : props.theme.colors.onForegroundAlt};
  margin: ${props => props.theme.spaces.l} 0px ${props => props.theme.spaces.xl}
    0px;
  padding: 0;
`;
