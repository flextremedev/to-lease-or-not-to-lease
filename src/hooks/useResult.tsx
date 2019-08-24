import React, { useReducer, useState } from "react";
import { SlideAnimation } from "../components/SlideAnimation/SlideAnimation";
import { ComparisonRow } from "../components/ComparisonRow/ComparisonRow";
import { Heading } from "../components/Heading/Heading";
import { ResultState, FormState, initialResults } from "../models/state";
import { totalPriceReducer } from "../lib/totalPriceReducer";
import { calculateValueAfterMonths } from "../lib/calculateValueAfterMonths";
import { theme } from "../theme";
import { calculateTotalPrice } from "../lib/calculateTotalPrice";

const resultReducer = (
  results: ResultState,
  formState: FormState
): ResultState => {
  const {
    finCarPrice,
    finRuntime,
    leasRuntime,
    leasMonthlyRate,
    leasInitialPayment,
  } = formState;
  const totalPriceState = totalPriceReducer(results["totalPrice"], formState);
  const residualValueState = {
    ...results["residualValue"],
    financing: calculateValueAfterMonths(finCarPrice, finRuntime),
  };
  const costsForRuntimeState = {
    ...results["costsForRuntime"],
    financing: totalPriceState.financing - residualValueState.financing,
    leasing: calculateTotalPrice(
      leasMonthlyRate,
      leasRuntime,
      leasInitialPayment
    ),
  };
  const monthlyCostsState = {
    ...results["monthlyCosts"],
    financing: costsForRuntimeState.financing / (finRuntime || 0),
    leasing: costsForRuntimeState.leasing / (leasRuntime || 0),
  };
  return {
    ...results,
    totalPrice: totalPriceState,
    residualValue: residualValueState,
    costsForRuntime: costsForRuntimeState,
    monthlyCosts: monthlyCostsState,
  };
};
const getColor = (expression1: number, expression2: number) => {
  if (
    expression1 != null &&
    !isNaN(expression1) &&
    expression2 != null &&
    !isNaN(expression2)
  ) {
    if (expression1 < expression2) {
      return theme.colors.success;
    } else if (expression1 === expression2) {
      return theme.colors.foregroundAlt;
    }
    return theme.colors.error;
  }
  return theme.colors.foregroundAlt;
};
export const useResult = (formState: FormState) => {
  const [showResults, setShowResults] = useState(false);
  const [resultState, dispatch] = useReducer(resultReducer, initialResults);
  const calculateResult = () => {
    dispatch(formState);
    setShowResults(true);
  };
  const renderResults = () =>
    Object.keys(resultState).map((resultKey, index: number) => {
      const result = resultState[resultKey as keyof ResultState];
      return (
        <SlideAnimation
          condition={showResults}
          yAmount={-index * 37}
          useAsFrom
          duration={350}
          fullWidth
          key={`slide-animation-${resultKey}`}
        >
          <ComparisonRow>
            <Heading
              h={3}
              style={{
                color: getColor(result["financing"], result["leasing"]),
              }}
              dataTestId={`${resultKey}-financing`}
            >
              {isNaN(result["financing"])
                ? "-"
                : result["financing"].toFixed(2)}
            </Heading>
            <Heading h={3} dataTestId={`${resultKey}-label`}>
              {result["label"]}
            </Heading>
            <Heading
              h={3}
              style={{
                color: getColor(result["leasing"], result["financing"]),
              }}
              dataTestId={`${resultKey}-leasing`}
            >
              {isNaN(result["leasing"]) ? "-" : result["leasing"].toFixed(2)}
            </Heading>
            {/* );
            })} */}
          </ComparisonRow>
        </SlideAnimation>
      );
    });
  const results = renderResults();
  return { results, calculateResult, showResults };
};
