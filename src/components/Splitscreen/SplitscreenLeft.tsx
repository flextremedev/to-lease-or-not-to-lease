import { styled } from "../../theme";

export const SplitscreenLeft = styled.div`
  padding: ${props => props.theme.spaces.xl};
  padding-bottom: ${props => props.theme.spaces.l};
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  background: ${props => props.theme.colors.foreground};
  > * {
    margin-bottom: ${props => props.theme.spaces.xl};
  }
`;
