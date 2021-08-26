import FormEditorStyles from "./FormEditorStyles";
import IFrame from "../IFrame/Iframe";
import { useState } from "react";

type FormEditorProps = {
  initialCSS: string;
  initialHTML: string;
  level?: string;
  toggleSwitchLabel?: string;
  formFields: JSON;
};

const FormEditor = ({
  level,
  toggleSwitchLabel,
  initialCSS,
  initialHTML,
}: FormEditorProps) => {
  const [HTML, setHTML] = useState<string>(initialHTML);
  const [CSS, setCSS] = useState<string>(initialCSS);

  // Component for display text
  const OutputIframe = () => (
    <IFrame
      level={level}
      toggleSwitchLabel={toggleSwitchLabel}
      head={<style dangerouslySetInnerHTML={{ __html: CSS }}></style>}
    >
      <div
        className="Container"
        dangerouslySetInnerHTML={{ __html: HTML }}
      ></div>
    </IFrame>
  );

  return (
    <FormEditorStyles>
      <div className="row col-12">
        <div className="col-6 editor"></div>
        <div className="col-6 output">
          <OutputIframe />
        </div>
      </div>
    </FormEditorStyles>
  );
};

export default FormEditor;
