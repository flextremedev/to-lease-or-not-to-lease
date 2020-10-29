import { styled } from "../../theme";

export const Page = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: 100%;
  background: ${({ theme }) => theme.colors.background};
  align-items: center;
  padding-top: ${props => props.theme.spaces.xxl};
  box-sizing: border-box;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.background} 0%,
    ${({ theme }) => theme.colors.backgroundAlt} 100%
  );
`;
