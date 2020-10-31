import React from "react";
import { Page } from "../components/Page/Page";
import { Paragraph } from "../components/Paragraph/Paragraph";
import { Heading } from "../components/Heading/Heading";
import { CardBody } from "../components/Card/CardBody";
import { CardFooter } from "../components/Card/CardFooter";
import { Splitscreen } from "../components/Splitscreen/Splitscreen";
import { SplitscreenLeft } from "../components/Splitscreen/SplitscreenLeft";
import { SplitscreenRight } from "../components/Splitscreen/SplitscreenRight";
import { Card } from "../components/Card/Card";
import { Button } from "../components/Button/Button";
import { SlideAnimation } from "../components/SlideAnimation/SlideAnimation";
import { useForm } from "../hooks/useForm";
import { useResult } from "../hooks/useResult";
import { styled } from "../theme";
import { useScrollToButton } from "../hooks/useScrollToButton";
const Content = styled.div`
  width: 80%;
  max-width: 1024px;
  display: flex;
  flex-flow: column nowrap;
  min-height: 100%;
  @media (max-width: ${props => props.theme.breakpoints.m}px) {
    width: 100%;
  }
`;
export const Home: React.FC = () => {
  const { formState, financingFields, leasingFields } = useForm();
  const { results, calculateResult, showResults } = useResult(formState);
  const { buttonRef, scrollToButton } = useScrollToButton();
  const handleCalculate = () => {
    calculateResult();
    scrollToButton();
  };

  return (
    <Page>
      <Content>
        <Heading h={1} invertColor style={{ textAlign: "center" }}>
          Finance or Leasing
        </Heading>
        <Paragraph invertColor style={{ textAlign: "center" }}>
          Which is the cheapest option for you? <br />
          Find out now!
        </Paragraph>
        <Card>
          <CardBody>
            <Splitscreen>
              <SplitscreenLeft>
                <Heading h={2} useMarginBottom>
                  Finance
                </Heading>
                {financingFields}
              </SplitscreenLeft>
              <SplitscreenRight>
                <Heading h={2} useMarginBottom invertColor>
                  Leasing
                </Heading>
                {leasingFields}
              </SplitscreenRight>
            </Splitscreen>
          </CardBody>
          <CardFooter expanded={showResults}>
            <SlideAnimation
              fullWidth={!showResults}
              condition={showResults}
              yAmount={208}
              duration={350}
            >
              <Button onClick={handleCalculate} fullWidth ref={buttonRef}>
                {showResults ? "Recalculate" : "Calculate"}
              </Button>
            </SlideAnimation>
            {showResults ? <React.Fragment>{results}</React.Fragment> : null}
          </CardFooter>
        </Card>
      </Content>
    </Page>
  );
};
