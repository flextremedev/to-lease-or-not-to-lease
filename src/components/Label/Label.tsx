import { styled } from "../../theme";
export const Label = styled.label`
  display: inline-block;
  color: ${props => props.theme.onForeground};
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1rem;
  max-height: 1rem;
`;
