import * as React from "react";
import { styled } from "../../theme";
const HeaderStyled = styled.header`
  height: 64px;
  width: 100%;
  background-color: ${props => props.theme.primary.base};
`;
const HeaderContentStyled = styled.div`
  display: flex;
  height: 100%;
  width: 60%;
  margin: auto;
  color: ${props => props.theme.onPrimary};
`;
export const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <HeaderContentStyled></HeaderContentStyled>
    </HeaderStyled>
  );
};
