import * as React from "react";
import { Label } from "../Label/Label";
import { styled } from "../../theme";
type TextFieldProps = {
  id?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  readOnly?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const InputStyled = styled.input`
  color: ${props => props.theme.onForeground};
  height: 48px;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  padding: 0px 8px;
  box-sizing: border-box;
`;
type FormControlProps = {
  label?: string;
};
const FormControl = styled.div<FormControlProps>`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: ${props => (props.label === undefined ? "auto" : "72px")};
`;
export const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  readOnly,
}) => {
  if (label && id === undefined) {
    console.warn(
      "You should provide an id to provide better accessibility when using a label."
    );
  }
  return (
    <FormControl label={label}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputStyled
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
      />
    </FormControl>
  );
};
