import { styled } from "../../theme";

export const CardFooter = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: ${props => props.theme.spaces.l} ${props => props.theme.spaces.xl};
  background-color: ${props => props.theme.colors.neutral};
  box-sizing: border-box;
  width: 100%;
  min-height: "80px";
`;
