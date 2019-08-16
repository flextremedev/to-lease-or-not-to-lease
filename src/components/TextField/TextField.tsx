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
  background-color: ${props => props.theme.colors.input.background.color};
  color: ${props => props.theme.colors.input.foreground.color};
  height: 38px;
  font-size: ${props => props.theme.fonts.input.fontSize};
  font-family: ${props => props.theme.fonts.input.fontFamily}, sans-serif;
  padding: 0px 8px;
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.colors.input.border.color};
  :focus {
    border-color: ${props => props.theme.colors.input.border.focus};
  }
`;
type FormControlProps = {
  label?: string;
};
const FormControl = styled.div<FormControlProps>`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: ${props => (props.label === undefined ? "auto" : "56px")};
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
