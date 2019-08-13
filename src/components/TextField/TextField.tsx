import * as React from "react";
import { Label } from "../Label/Label";
import { styled } from "../../theme";
type TextFieldProps = {
  id?: string;
  label?: string;
  placeholder?: string;
  value?: string;
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
}) => {
  return (
    <FormControl>
      {label && <Label>{label}</Label>}
      <InputStyled
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </FormControl>
  );
};
