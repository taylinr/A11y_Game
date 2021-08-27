import Select from "./Select/Select";
import { SelectProps } from "./Select/Select";

import * as React from "react";
import { Formik, Form } from "formik";
import Button from "../Button/Button";
import FormSchema from "./FormSchema";
import { useEffect } from "react";

export type FormProps = {
  formFields: Array<SelectProps>;
  // | InputProps | TextareaProps>;
  cta: string;
  successHeadline: string;
  successText: string;
  propSuccess?: boolean;
  onChange: React.FormEventHandler;
};

export function selectComponent({ component, ...field }: any) {
  switch (component) {
    case "select":
      return <Select key={field.name} {...field} />;

    // case "input":
    //   return <Input key={field.name} {...field} />;

    // case "textarea":
    //   return <Textarea key={field.name} {...field} />;

    default:
      return null;
  }
}

export default function FormComponent({
  propSuccess,
  cta,
  formFields,
  onChange,
}: FormProps) {
  const [success, setSuccess] = React.useState(propSuccess);
  useEffect(() => {
    setSuccess(propSuccess);
  }, [propSuccess]);

  function getInitalValues() {
    const initialValues: any = {};
    formFields.forEach((field) => {
      initialValues[field.name] = "";
    });
    return initialValues;
  }

  if (typeof formFields === "undefined") {
    return <p>No Formfields specified!</p>;
  }

  if (success) {
    return <p>Success!!</p>;
  }

  return (
    <Formik
      initialValues={getInitalValues()}
      onSubmit={(values) => {
        preventDefault();
      }}
      validationSchema={FormSchema}
    >
      <div>
        <form onChange={onChange}>
          {formFields.map((field) => selectComponent(field))}
        </form>
      </div>
    </Formik>
  );
}
function preventDefault() {
  throw new Error("Function not implemented.");
}
