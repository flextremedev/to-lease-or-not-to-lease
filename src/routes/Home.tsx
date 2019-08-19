import React, { useState, useCallback, useReducer } from "react";
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
const formLabels = {
  finCarPrice: "Neuwagenpreis",
  finInitialPayment: "Anzahlung",
  finRunTime: "Laufzeit (Monate)",
  finMonthlyRate: "Monatliche Rate",
  finEndingRate: "Schlussrate",
  finAnnualPercentageRate: "Effektiver Jahreszins",
  leasCarPrice: "Neuwagenpreis",
  leasInitialPayment: "Anzahlung",
  leasRunTime: "Laufzeit (Monate)",
  leasMonthlyRate: "Monatliche Rate",
};
const initialFormState = {
  finCarPrice: "",
  finInitialPayment: "",
  finRunTime: "",
  finMonthlyRate: "",
  finEndingRate: "",
  finAnnualPercentageRate: "",
  leasCarPrice: "",
  leasInitialPayment: "",
  leasRunTime: "",
  leasMonthlyRate: "",
};
type FormState = typeof initialFormState;
type FormAction = {
  name: string;
  value: string;
};
const fieldNames = Object.keys(initialFormState);
const financingFieldNames = fieldNames.slice(0, 6) as (keyof Pick<
  FormState,
  | "finAnnualPercentageRate"
  | "finCarPrice"
  | "finEndingRate"
  | "finInitialPayment"
  | "finMonthlyRate"
  | "finRunTime"
>)[];
const leasingFieldNames = fieldNames.slice(6) as (keyof Pick<
  FormState,
  "leasCarPrice" | "leasInitialPayment" | "leasMonthlyRate" | "leasRunTime"
>)[];

const formReducer = (state: FormState, { name, value }: FormAction) => {
  return { ...state, [name]: value };
};
export const Home: React.FC = () => {
  const [showResult, setShowResult] = useState(false);
  const [formState, dispatch] = useReducer(formReducer, initialFormState);
  const [results] = useState([
    ["Result", "Result", "Result"],
    ["Result", "Result", "Result"],
    ["Result", "Result", "Result"],
    ["Result", "Result", "Result"],
  ]);
  const handleCalculate = useCallback(() => setShowResult(true), []);
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      return dispatch({ name, value });
    },
    [dispatch]
  );
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
  const renderFields = (
    fieldNames: (keyof FormState)[],
    invertLabelColor?: boolean
  ) =>
    fieldNames.map(fieldName => (
      <TextField
        key={fieldName}
        id={fieldName}
        onChange={handleChange}
        label={formLabels[fieldName]}
        name={fieldName}
        value={formState[fieldName]}
        invertLabelColor={invertLabelColor}
      />
    ));

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
              {renderFields(financingFieldNames)}
            </SplitscreenLeft>
            <SplitscreenRight>
              <Heading h={2} invertColor>
                Leasing
              </Heading>
              {renderFields(leasingFieldNames, true)}
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
