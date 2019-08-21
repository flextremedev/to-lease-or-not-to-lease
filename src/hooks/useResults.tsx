import React, { useReducer, useState } from "react";
import { SlideAnimation } from "../components/SlideAnimation/SlideAnimation";
import { ComparisonRow } from "../components/ComparisonRow/ComparisonRow";
import { Heading } from "../components/Heading/Heading";
import { ResultState, FormState, initialResults } from "../models/state";
import { totalPriceReducer } from "../lib/totalPriceReducer";
import { calculateValueAfterMonths } from "../lib/calculateValueAfterMonths";

const resultReducer = (
  results: ResultState,
  formState: FormState
): ResultState => {
  const { finCarPrice, finRunTime, leasRunTime } = formState;
  const totalPriceState = totalPriceReducer(results["totalPrice"], formState);
  const residualValueState = {
    ...results["residualValue"],
    financing: calculateValueAfterMonths(finCarPrice, finRunTime),
  };
  const costsForRuntimeState = {
    ...results["costsForRuntime"],
    financing: totalPriceState.financing - residualValueState.financing,
    leasing: totalPriceState.leasing,
  };
  const monthlyCostsState = {
    ...results["monthlyCosts"],
    financing: costsForRuntimeState.financing / finRunTime,
    leasing: costsForRuntimeState.leasing / leasRunTime,
  };
  return {
    ...results,
    totalPrice: totalPriceState,
    residualValue: residualValueState,
    costsForRuntime: costsForRuntimeState,
    monthlyCosts: monthlyCostsState,
  };
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
            {Object.keys(result).map(entryKey => {
              const key = entryKey as keyof (typeof result);
              const resultAtKey = result[key];
              let text =
                typeof resultAtKey === "string"
                  ? resultAtKey
                  : `${resultAtKey.toFixed(2)}`;
              if (text.includes("NaN")) {
                text = "-";
              }
              return (
                <Heading h={3} key={`heading-${resultKey}-${entryKey}`}>
                  {text}
                </Heading>
              );
            })}
          </ComparisonRow>
        </SlideAnimation>
      );
    });
  const results = renderResults();
  return { results, calculateResult, showResults };
};
