import React, { useReducer, useCallback } from "react";
import { TextField } from "../components/TextField/TextField";

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
export const useForm = () => {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);
  const handleFormChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      return dispatch({ name, value });
    },
    [dispatch]
  );
  const renderFields = (
    fieldNames: (keyof FormState)[],
    invertLabelColor?: boolean
  ) =>
    fieldNames.map(fieldName => (
      <TextField
        key={fieldName}
        id={fieldName}
        onChange={handleFormChange}
        label={formLabels[fieldName]}
        name={fieldName}
        value={formState[fieldName]}
        invertLabelColor={invertLabelColor}
      />
    ));
  const financingFields = renderFields(financingFieldNames);
  const leasingFields = renderFields(leasingFieldNames, true);
  return { financingFields, leasingFields };
};
