import { styled } from "../../theme";
type CardFooterProps = {
  expanded?: boolean;
};
export const CardFooter = styled.div<CardFooterProps>`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: ${props => props.theme.spaces.xl} ${props => props.theme.spaces.xl};
  background-color: ${props => props.theme.colors.neutral};
  box-sizing: border-box;
  width: 100%;
  height: ${props => (props.expanded ? "196px" : "112px")};
  transition: height 350ms ease;
  > div:last-of-type {
    margin-bottom: 0;
  }
`;
