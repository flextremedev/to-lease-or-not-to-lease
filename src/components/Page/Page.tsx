import { styled } from "../../theme";

export const Page = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: 100%;
  background: rgb(5, 82, 181);
  align-items: center;
  padding-top: ${props => props.theme.spaces.xxl};
  box-sizing: border-box;
  background: linear-gradient(
    0deg,
    rgba(5, 82, 181, 1) 0%,
    rgba(71, 163, 243, 1) 100%
  );
`;
