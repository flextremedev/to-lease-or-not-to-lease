import React, { useReducer, useCallback } from "react";
import { TextField } from "../components/TextField/TextField";
import { initialFormState, FormState } from "../models/state";

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

type FormAction = {
  name: string;
  value: number;
};
const fieldNames = Object.keys(initialFormState);
const financingFieldNames = fieldNames.slice(0, 5) as (keyof Pick<
  FormState,
  | "finCarPrice"
  | "finEndingRate"
  | "finInitialPayment"
  | "finMonthlyRate"
  | "finRunTime"
>)[];
const leasingFieldNames = fieldNames.slice(5) as (keyof Pick<
  FormState,
  "leasCarPrice" | "leasInitialPayment" | "leasMonthlyRate" | "leasRunTime"
>)[];

const formReducer = (state: FormState, { name, value }: FormAction) => {
  return { ...state, [name]: value };
};
export const useForm = () => {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);
  const handleFormChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      return dispatch({ name, value: Number(value) });
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
        invertLabelColor={invertLabelColor}
      />
    ));
  const financingFields = renderFields(financingFieldNames);
  const leasingFields = renderFields(leasingFieldNames, true);
  return { formState, financingFields, leasingFields };
};
