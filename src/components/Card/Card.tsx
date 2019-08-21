import * as React from "react";
import { styled } from "../../theme";

const CardStyled = styled.div`
  background: ${props => props.theme.colors.foreground};
  width: 608px;
  display: flex;
  flex-flow: column nowrap;
  box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.26),
    0px 4px 6px 2px rgba(0, 0, 0, 0.16), 0px 12px 11px 0px rgba(0, 0, 0, 0.16);
  margin-bottom: 64px;
  @media (max-width: 608px) {
    width: 100%;
  }
`;

export const Card: React.FC = ({ children }) => {
  return <CardStyled>{children}</CardStyled>;
};
