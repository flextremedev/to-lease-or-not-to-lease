import { styled } from "../../theme";

export const Splitscreen = styled.div`
  display: flex;
  @media (max-width: 608px) {
    flex-direction: column;
  }
`;
