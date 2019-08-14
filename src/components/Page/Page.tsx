import { styled } from "../../theme";

export const Page = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
`;
export const PageContent = styled.div`
  padding: ${props => props.theme.spaces.l} 0px 0px 0px;
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;
