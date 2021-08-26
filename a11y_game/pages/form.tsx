import React from "react";
import { Options } from "../model/options.model";
import {
  Form,
  TextField,
  SelectField,
  SubmitButton,
} from "../components/Form/Form";

export default function FormPage() {
  const onSubmit = () => {
    console.log("SUBMIT!!");
  };

  return (
    <main>
      <div className="App">
        <Form onSubmit={onSubmit}>
          <div>
            <TextField name="name" label="Name" />
          </div>

          <div>
            <TextField name="email" label="Email" />
          </div>

          <div>
            <SelectField
              name="role"
              label="Role"
              options={[
                new Options("Admin", "admin"),
                new Options("User", "user"),
              ]}
            />
          </div>

          <SubmitButton>Submit!</SubmitButton>
        </Form>
      </div>
    </main>
  );
}
