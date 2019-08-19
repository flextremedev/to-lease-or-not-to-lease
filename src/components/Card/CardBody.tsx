import { styled } from "../../theme";
type CardBodyProps = {
  usePadding?: boolean;
};
export const CardBody = styled.div<CardBodyProps>`
  background-color: ${props => props.theme.colors.foreground};
  box-sizing: border-box;
  width: 100%;
  padding: ${props => (props.usePadding ? props.theme.spaces.xl : "0px")};
`;
