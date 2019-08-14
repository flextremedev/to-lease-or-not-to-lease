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
  width: 100%;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  padding: 0px 8px;
  box-sizing: border-box;
`;
const FormControl = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 72px;
  justify-content: space-between;
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
    <FormControl>
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
