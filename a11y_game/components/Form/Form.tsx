// FormElements.jsx

import React from "react";
import { Options } from "../../model/options.model";
import {
  Formik,
  Form as FormikForm,
  Field,
  ErrorMessage,
  useFormikContext,
} from "formik";

type FromProps = {
  children?: React.ReactNode;
  name?: string;
  label?: string;
  placeholder?: string;
  props?: any;
  msg?: string;
  options?: Array<Options>;
  onSubmit?: Function;
};

export function Form({ children, props, onSubmit }: FromProps) {
  return (
    <Formik {...props} onSubmit={onSubmit}>
      <FormikForm>{children}</FormikForm>
    </Formik>
  );
}

export function TextField({ name, label, placeholder }: FromProps) {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <Field
        className="form-control"
        type="text"
        name={name}
        id={name}
        placeholder={placeholder || ""}
      />
      {/* <ErrorMessage
        name={"test"}
        render={(msg) => <div style={{ color: "red" }}>{msg}</div>}
      /> */}
    </>
  );
}

export function SelectField({ name, label, options }: FromProps) {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <Field as="select" id={name} name={name}>
        <option value="">Choose...</option>
        {options
          ? options.map((optn, index) => (
              <option
                key={index}
                value={optn.value}
                label={optn.label || optn.value}
              />
            ))
          : null}
      </Field>
      {/* <ErrorMessage
        name={name ? name : "select"}
        render={(msg) => <div style={{ color: "red" }}>{msg}</div>}
      /> */}
    </>
  );
}

export function SubmitButton({ children }: FromProps) {
  const { isSubmitting } = useFormikContext();

  return (
    <button type="submit" disabled={isSubmitting}>
      {children}
    </button>
  );
}
