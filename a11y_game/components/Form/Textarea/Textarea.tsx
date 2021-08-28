import * as React from "react";
import { Field, ErrorMessage, FieldProps } from "formik";
import TextareaStyles from "./TextareaStyles";

export type TextareaProps = {
  label: string;
  placeholder: string;
  name: string;
  component?: string;
  hidden?: boolean;
  error?: string;
};

const Textarea = ({
  label,
  placeholder,
  name,
  error = "",
  hidden = false,
}: TextareaProps) => (
  <TextareaStyles>
    <Field name={name}>
      {({ field, form }: FieldProps) => (
        <div>
          <label htmlFor={name} hidden={hidden}>
            {label}
          </label>
          <textarea {...field} id={name} placeholder={placeholder} rows={8} />
          <ErrorMessage name={name}>
            {(msg) => <div>{error ? error : msg}</div>}
          </ErrorMessage>
        </div>
      )}
    </Field>
  </TextareaStyles>
);
export default Textarea;
