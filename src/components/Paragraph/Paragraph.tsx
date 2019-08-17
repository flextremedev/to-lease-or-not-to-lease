import { styled } from "../../theme";

export const Paragraph = styled.p`
  font-size: ${props => props.theme.fonts.paragraph.fontSize};
  font-family: ${props => props.theme.fonts.paragraph.fontFamily};
  font-weight: ${props => props.theme.fonts.paragraph.fontWeight};
  color: ${props => props.theme.colors.foregroundAlt};
`;
