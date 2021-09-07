import CodeEditorStyles from "./CodeEditorStyles";
import IFrame from "../IFrame/Iframe";
import React, { useRef, useEffect, useState } from "react";
import Tabs from "../Tabs/Tabs";
import { Code } from "../../model/code.model";

import { EditorView, ViewUpdate } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { basicSetup } from "@codemirror/basic-setup";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";

let oneDark = EditorView.theme(
  {
    "&": {
      color: "#3b6b76",
      backgroundColor: "#dce6eb",
      fontSize: "16px",
    },
    ".cm-content": {
      caretColor: "#0e9",
    },
    "&.cm-focused .cm-cursor": {
      borderLeftColor: "#0e9",
    },
    "&.cm-focused .cm-selectionBackground, ::selection": {
      backgroundColor: "#fff",
    },
    ".cm-gutters": {
      backgroundColor: "#045",
      color: "white",
      border: "none",
    },
    ".cm-activeLineGutter": {
      color: "#3b6b76",
    },
    ".ͼh": {
      color: "#000000",
    },
  },
  { dark: false }
);

type EditorProps = {
  setCode: Function;
  initialCSS?: string;
  initialHTML?: string;
  level?: string;
  iframeFunction?: Function;
  toggleSwitchLabel?: string;
  showCSS?: boolean;
};

const CodeEditor = ({
  toggleSwitchLabel,
  initialHTML,
  initialCSS,
  level,
  setCode,
  iframeFunction,
  showCSS,
}: EditorProps) => {
  // Local state
  const [editorTreeValueHTML, setEditorTreeValueHTML] = useState<string[]>([]);
  const [editorTreeValueCSS, setEditorTreeValueCSS] = useState<string[]>([]);
  const [HTML, setHTML] = useState<string>("");
  const [CSS, setCSS] = useState<string>("");
  const [initEditor, setInitEditor] = useState<boolean>(false);

  // Ref of the editor
  const editor = useRef<EditorView>();

  const tree: Code = new Code(editorTreeValueHTML, editorTreeValueCSS);

  // Event listener on editor updates
  const onUpdateHTML = () =>
    EditorView.updateListener.of((v: ViewUpdate) => {
      const doc = v.state.doc;
      const value = doc.toString();
      if (value !== HTML) setHTML(value);
      let treeArray = new Array();
      treeArray = [...doc.toJSON()];

      if (treeArray !== editorTreeValueHTML) {
        setEditorTreeValueHTML(treeArray);
      }
    });

  const onUpdateCSS = () =>
    EditorView.updateListener.of((v: ViewUpdate) => {
      const doc = v.state.doc;

      const value = doc.toString();
      if (value !== CSS) setCSS(value);
      let treeArray = new Array();
      treeArray = [...doc.toJSON()];
      if (treeArray !== editorTreeValueCSS) {
        setEditorTreeValueCSS(treeArray);
      }
    });

  // Initilize view
  useEffect(() => {
    if (!initEditor) {
      setInitEditor(true);

      const elHTML = document.getElementById("codemirror-editor-wrapper-html");

      editor.current = new EditorView({
        state: EditorState.create({
          doc: initialHTML,
          extensions: [basicSetup, html(), oneDark, onUpdateHTML()],
        }),
        parent: elHTML as Element,
      });

      const elCSS = document.getElementById("codemirror-editor-wrapper-css");

      editor.current = new EditorView({
        state: EditorState.create({
          doc: initialCSS,
          extensions: [basicSetup, css(), oneDark, onUpdateCSS()],
        }),
        parent: elCSS as Element,
      });
    }
  }, [initEditor, initialHTML, onUpdateHTML, initialCSS, onUpdateCSS]);

  useEffect(
    function () {
      setCode(tree);
    },
    [editorTreeValueHTML, editorTreeValueCSS]
  );

  // Component for display text
  const OutputIframe = () => (
    <IFrame
      level={level}
      toggle={toggleSwitchLabel ? true : false}
      toggleSwitchLabel={toggleSwitchLabel}
      css={CSS}
      html={HTML}
      iframeFunction={iframeFunction}
    />
  );

  return (
    <CodeEditorStyles level={level}>
      <div className="row col-12">
        <div className="col-6 editor">
          {showCSS == true || showCSS == undefined ? (
            <Tabs
              tabkeys={["tab--html", "tab--css"]}
              tabnames={["HTML", "CSS"]}
              contents={[
                <div key="0" id="codemirror-editor-wrapper-html" />,
                <div key="1" id="codemirror-editor-wrapper-css" />,
              ]}
            />
          ) : (
            <Tabs
              tabkeys={["tab--html"]}
              tabnames={["HTML"]}
              contents={[<div key="0" id="codemirror-editor-wrapper-html" />]}
            />
          )}
        </div>
        <div className="col-6 output">
          <OutputIframe />
        </div>
      </div>
    </CodeEditorStyles>
  );
};

export default CodeEditor;
