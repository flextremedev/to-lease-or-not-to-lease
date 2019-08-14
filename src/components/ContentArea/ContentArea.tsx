import { styled } from "../../theme";

export const ContentArea = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: ${props => props.theme.spaces.l};
`;
