import * as React from "react";
import { Field, ErrorMessage, FieldProps } from "formik";
import SelectStyles from "./SelectStyles";

export type SelectProps = {
  options: Array<{
    name: string;
    value: string;
  }>;
  placeholder: string;
  component?: "select";
  name: string;
  error?: string;
  textBefore?: string;
  textAfter?: string;
};

const Select = ({
  options,
  placeholder,
  name,
  error,
  textBefore,
  textAfter,
}: SelectProps) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.

  return (
    <SelectStyles>
      <label>{textBefore}</label>
      <Field name={name}>
        {({ field, form }: FieldProps) => (
          <div>
            {/* <label htmlFor={name}>{name}</label> */}

            <select id={name} {...field}>
              <option value="" disabled>
                {placeholder}
              </option>
              {options.map(({ name, value }) => (
                <option key={value} value={value}>
                  {name}
                </option>
              ))}
            </select>

            <ErrorMessage name={name + ""}>
              {(msg) => <div>{error ? error : msg}</div>}
            </ErrorMessage>
          </div>
        )}
      </Field>
      <label>{textAfter}</label>
    </SelectStyles>
  );
};

export default Select;
