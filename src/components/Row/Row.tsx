import { styled } from "../../theme";

export const Row = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  margin-bottom: ${props => props.theme.spaces.l};
  > *:not(:last-child) {
    margin-bottom: ${props => props.theme.spaces.l};
  }
  :last-of-type {
    margin-bottom: ${props => props.theme.spaces.l};
  }
`;
