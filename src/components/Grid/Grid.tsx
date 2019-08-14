import { styled } from "../../theme";

export const Grid = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  :last-of-type {
    margin-bottom: ${props => props.theme.spaces.l};
  }
`;
