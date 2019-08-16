import { styled } from "../../theme";
export const Label = styled.label`
  display: inline-block;
  color: ${props => props.theme.colors.onForeground};
  font-family: ${props => props.theme.fonts.label.fontFamily}, sans-serif;
  font-weight: ${props => props.theme.fonts.label.fontWeight};
  font-size: ${props => props.theme.fonts.label.fontSize};
  line-height: ${props => props.theme.fonts.label.fontSize};
  max-height: ${props => props.theme.fonts.label.fontSize};
`;
