import FormEditorStyles from "./FormEditorStyles";
import IFrame from "../IFrame/Iframe";
import { useState } from "react";
import { FormProps } from "../Form/Form";
import FormComponent from "../Form/Form";

type FormEditorProps = {
  initialCSS: string;
  initialHTML: string;
  level?: string;
  toggleSwitchLabel?: string;
  toggle: boolean;
  formProps: Array<FormProps>;
  getNewHTML: Function;
  setFormInParent: Function;
};

const FormEditor = ({
  level,
  toggleSwitchLabel,
  toggle,
  initialCSS,
  initialHTML,
  formProps,
  getNewHTML,
  setFormInParent,
}: FormEditorProps) => {
  const [HTML, setHTML] = useState<string>(initialHTML);
  const [CSS, setCSS] = useState<string>(initialCSS);

  // Component for display text
  const OutputIframe = () => (
    <IFrame
      level={level}
      toggle={toggle}
      toggleSwitchLabel={toggleSwitchLabel}
      css={CSS}
      html={HTML}
    />
  );

  const getID = (target: Element) => {
    return target.id;
  };

  const changeHTML = (event: Event) => {
    setFormInParent((event.target as HTMLFormElement).form);
    const newHTML: string = getNewHTML(event.target, HTML);

    setHTML(newHTML);
  };

  const setProps = ({ ...field }: any) => {
    return <FormComponent {...field} onChange={changeHTML} />;
  };

  return (
    <FormEditorStyles>
      <div className="row col-12">
        <div className="col-6 editor__wrapper">
          <div className="headline"> Quiz </div>
          <div className="editor">
            {formProps.map((field) => setProps(field))}
          </div>
        </div>
        <div className="col-6 output">
          <OutputIframe />
        </div>
      </div>
    </FormEditorStyles>
  );
};

export default FormEditor;
