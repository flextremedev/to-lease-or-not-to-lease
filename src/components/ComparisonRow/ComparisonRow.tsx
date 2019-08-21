import { styled } from "../../theme";

export const ComparisonRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;

  > *:first-child {
    text-align: left;
    flex: 1;
  }
  > *:nth-child(2) {
    text-align: center;
    flex: 2;
  }
  > *:nth-child(3) {
    text-align: right;
    flex: 1;
  }
`;
