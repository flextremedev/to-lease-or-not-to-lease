import React, { useReducer, useCallback } from "react";
import { TextField } from "../components/TextField/TextField";
import { initialFormState, FormState } from "../models/state";

const formLabels = {
  finCarPrice: "Vehicle Price",
  finInitialPayment: "Initial Payment",
  finRuntime: "Contract Length (months)",
  finMonthlyRate: "Monthly Payment",
  finEndingRate: "Ending Rate",
  leasCarPrice: "Vehicle Price",
  leasInitialPayment: "Initial Payment",
  leasRuntime: "Contract Length (months)",
  leasMonthlyRate: "Monthly Payment",
};

type FormAction = {
  name: string;
  value: number | undefined;
};
const fieldNames = Object.keys(initialFormState);
const financingFieldNames = fieldNames.slice(0, 5) as (keyof Pick<
  FormState,
  | "finCarPrice"
  | "finEndingRate"
  | "finInitialPayment"
  | "finMonthlyRate"
  | "finRuntime"
>)[];
const leasingFieldNames = fieldNames.slice(5) as (keyof Pick<
  FormState,
  "leasCarPrice" | "leasInitialPayment" | "leasMonthlyRate" | "leasRuntime"
>)[];

const formReducer = (state: FormState, { name, value }: FormAction) => {
  return { ...state, [name]: value };
};
export const useForm = () => {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);
  const handleFormChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      return dispatch({
        name,
        value: value === "" ? undefined : Number(value),
      });
    },
    [dispatch]
  );
  const renderFields = (
    fieldNames: (keyof FormState)[],
    invertLabelColor?: boolean
  ) =>
    fieldNames.map((fieldName, index) => (
      <TextField
        key={fieldName}
        id={fieldName}
        tabIndex={index + 1}
        onChange={handleFormChange}
        label={formLabels[fieldName]}
        name={fieldName}
        value={formState[fieldName]}
        type="number"
        dataTestId={fieldName}
        invertLabelColor={invertLabelColor}
      />
    ));
  const financingFields = renderFields(financingFieldNames);
  const leasingFields = renderFields(leasingFieldNames, true);
  return { formState, financingFields, leasingFields };
};
