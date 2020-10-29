import { styled } from "../../theme";

export const Splitscreen = styled.div`
  display: flex;
  @media (max-width: ${props => props.theme.breakpoints.m}px) {
    flex-direction: column;
  }
`;
