import React, { useState, useCallback } from "react";
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
import { ComparisonRow } from "../components/ComparisonRow/ComparisonRow";
import { useForm } from "../hooks/useForm";

export const Home: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
  const { financingFields, leasingFields } = useForm();
  const [results] = useState([
    ["Result", "Result", "Result"],
    ["Result", "Result", "Result"],
    ["Result", "Result", "Result"],
    ["Result", "Result", "Result"],
  ]);
  const handleCalculate = useCallback(() => setShowResult(true), []);
  const renderResults = () =>
    results.map((row: string[], index: number) => {
      return (
        <SlideAnimation
          condition={showResult}
          yAmount={-index * 37}
          useAsFrom
          duration={350}
          fullWidth
          key={`${row[1]}${index}`}
        >
          <ComparisonRow>
            {row.map((column: string, index: number) => {
              return (
                <Heading h={3} key={index + " " + column}>
                  {column}
                </Heading>
              );
            })}
          </ComparisonRow>
        </SlideAnimation>
      );
    });

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
        <CardFooter expanded={showResult}>
          <SlideAnimation
            fullWidth={!showResult}
            condition={showResult}
            yAmount={156}
            duration={350}
          >
            <Button
              fullWidth={!showResult}
              onClick={handleCalculate}
              variant={showResult ? "text" : "contained"}
              invertColor={showResult}
            >
              {showResult ? "Erneut berechnen" : "Berechnen"}
            </Button>
          </SlideAnimation>
          {showResult ? (
            <React.Fragment>{renderResults()}</React.Fragment>
          ) : null}
        </CardFooter>
      </Card>
    </Page>
  );
};
