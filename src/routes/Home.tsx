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
import { useResult } from "../hooks/useResults";

export const Home: React.FC = () => {
  const { formState, financingFields, leasingFields } = useForm();
  const { results, calculateResult, showResults } = useResult(formState);
  return (
    <Page>
      <Heading h={1} invertColor>
        To lease or not to lease
      </Heading>
      <Paragraph invertColor>
        Finde heraus, ob es günstiger ist dein nächstes Auto zu leasen oder zu
        kaufen.
      </Paragraph>
      <Card>
        <CardBody>
          <Splitscreen>
            <SplitscreenLeft>
              <Heading h={2}>Finanzierung</Heading>
              {financingFields}
            </SplitscreenLeft>
            <SplitscreenRight>
              <Heading h={2} invertColor>
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
            yAmount={156}
            duration={350}
          >
            <Button
              fullWidth={!showResults}
              onClick={calculateResult}
              variant={showResults ? "text" : "contained"}
              invertColor={showResults}
            >
              {showResults ? "Erneut berechnen" : "Berechnen"}
            </Button>
          </SlideAnimation>
          {showResults ? <React.Fragment>{results}</React.Fragment> : null}
        </CardFooter>
      </Card>
    </Page>
  );
};
