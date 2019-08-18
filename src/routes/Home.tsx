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
import { TextField } from "../components/TextField/TextField";
import { SlideAnimation } from "../components/SlideAnimation/SlideAnimation";
import { ComparisonRow } from "../components/ComparisonRow/ComparisonRow";
type FormData = {
  finCarPrice: string;
  finInitialPayment: string;
  finRunTime: string;
  finMonthlyRate: string;
  finEndingRate: string;
  finAnnualPercentageRate: string;
  leasCarPrice: string;
  leasInitialPayment: string;
  leasRunTime: string;
  leasMonthlyRate: string;
};
export const Home: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    finAnnualPercentageRate: "",
    finCarPrice: "",
    finEndingRate: "",
    finInitialPayment: "",
    finMonthlyRate: "",
    finRunTime: "",
    leasCarPrice: "",
    leasInitialPayment: "",
    leasMonthlyRate: "",
    leasRunTime: "",
  });
  const [results] = useState([
    ["Result", "Result", "Result"],
    ["Result", "Result", "Result"],
    ["Result", "Result", "Result"],
    ["Result", "Result", "Result"],
  ]);
  const handleCalculate = useCallback(() => setShowResult(true), []);
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name } = event.target;
      setFormData({ ...formData, [name]: event.target.value });
    },
    [formData]
  );
  const renderResults = useCallback(
    () =>
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
      }),
    [showResult, results]
  );

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
              <TextField
                onChange={handleChange}
                label={"Neuwagenpreis"}
                name={"finCarPrice"}
                value={formData.finCarPrice}
              />
              <TextField
                onChange={handleChange}
                label={"Anzahlung"}
                name={"finInitialPayment"}
                value={formData.finInitialPayment}
              />
              <TextField
                onChange={handleChange}
                label={"Laufzeit (Monate)"}
                name={"finRunTime"}
                value={formData.finRunTime}
              />
              <TextField
                onChange={handleChange}
                label={"Monatliche Rate"}
                name="finMonthlyRate"
                value={formData.finMonthlyRate}
              />
              <TextField
                onChange={handleChange}
                label={"Schlussrate"}
                name="finEndingRate"
                value={formData.finEndingRate}
              />
              <TextField
                onChange={handleChange}
                label={"Effektiver Jahreszins"}
                name="finAnnualPercentageRate"
                value={formData.finAnnualPercentageRate}
              />
            </SplitscreenLeft>
            <SplitscreenRight>
              <Heading h={2} invertColor>
                Leasing
              </Heading>
              <TextField
                onChange={handleChange}
                label={"Neuwagenpreis"}
                invertLabelColor
                name="leasCarPrice"
                value={formData.leasCarPrice}
              />
              <TextField
                onChange={handleChange}
                label={"Anzahlung"}
                invertLabelColor
                name="leasInitialPayment"
                value={formData.leasInitialPayment}
              />
              <TextField
                onChange={handleChange}
                label={"Laufzeit (Monate)"}
                invertLabelColor
                name="leasRunTime"
                value={formData.leasRunTime}
              />
              <TextField
                onChange={handleChange}
                label={"Monatliche Rate"}
                invertLabelColor
                name="leasMonthlyRate"
                value={formData.leasMonthlyRate}
              />
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
