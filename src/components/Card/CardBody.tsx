import { styled } from "../../theme";

export const CardBody = styled.div`
  padding: ${props => props.theme.spaces.xl};
  padding-bottom: ${props => props.theme.spaces.l};
  background-color: ${props => props.theme.colors.foreground};
  box-sizing: border-box;
  width: 100%;
`;
