
import CodeEditorStyles from "./CodeEditorStyles";
import IFrame from "./Iframe";
import React, { useRef, useEffect, useState, createElement } from "react";
import Tabs from "../Tabs/Tabs";

import { EditorView, ViewUpdate } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { basicSetup } from "@codemirror/basic-setup";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import {javascript} from "@codemirror/lang-javascript";

let oneDark = EditorView.theme({
  "&": {
    color: "#3b6b76",
    backgroundColor: "#dce6eb"
  },
  ".cm-content": {
    caretColor: "#0e9"
  },
  "&.cm-focused .cm-cursor": {
    borderLeftColor: "#0e9"
  },
  "&.cm-focused .cm-selectionBackground, ::selection": {
    backgroundColor: "#074"
  },
  ".cm-gutters": {
    backgroundColor: "#045",
    color: "#3b6b76",
    border: "none"
  }
}, {dark: false})


type EditorProps = {
  initialCSS?: string;
  initialHTML?: string;
  initialJS?: string;
  level?: string;
}

export default function CodeEditor({ initialHTML, initialCSS, initialJS, level }: EditorProps) {

  // Local state
  const [editorTreeValue, setEditorTreeValue] = useState<string[]>([]);
  const [HTML, setHTML] = useState<string>("");
  const [CSS, setCSS] = useState<string>("");
  const [JS, setJS] = useState<string>("");

  // Ref of the editor
  const editor = useRef<EditorView>();

	
  // Event listener on editor updates
  const onUpdateHTML = () =>
    EditorView.updateListener.of((v: ViewUpdate) => {
      const doc = v.state.doc;
      const value = doc.toString();
      if (value !== HTML) setHTML(value);

      let treeArray = new Array();
      treeArray = [...doc.toJSON()];

      if (treeArray !== editorTreeValue) setEditorTreeValue(treeArray);
    });
  
  
  
  const onUpdateCSS = () =>
    EditorView.updateListener.of((v: ViewUpdate) => {
      const doc = v.state.doc;

      const value = doc.toString();
      if (value !== CSS) setCSS(value);

      let treeArray = new Array();
      treeArray = [...doc.toJSON()];

      if (treeArray !== editorTreeValue) setEditorTreeValue(treeArray);
    });
  
  
  const onUpdateJS = () =>
    EditorView.updateListener.of((v: ViewUpdate) => {
      const doc = v.state.doc;

      const value = doc.toString();
      if (value !== CSS) setJS(value);

      let treeArray = new Array();
      treeArray = [...doc.toJSON()];

      if (treeArray !== editorTreeValue) setEditorTreeValue(treeArray);
    });
	
  // Initilize view
  useEffect(function initEditorView() {
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

    const elJS = document.getElementById("codemirror-editor-wrapper-js");
    editor.current = new EditorView({
      state: EditorState.create({
        doc: initialJS,
        extensions: [basicSetup, javascript(), oneDark, onUpdateJS()],
      }),
      parent: elJS as Element,
    });


  }, []);
	
  // Component for display text
  const OutputIframe = () => (
    <IFrame level={level} head={<style dangerouslySetInnerHTML={{ __html: CSS }}></style>}>
      <div className="Container" dangerouslySetInnerHTML={{ __html: HTML }}></div>
      <script type="text/javascript" dangerouslySetInnerHTML={{ __html: JS }}></script>
    </IFrame>
  );

  // // Component for display array from editor
  const OutputArray = () => (
    <div className="output__array">
      <pre>
        <code>{JSON.stringify(editorTreeValue, null, 2)}</code>
      </pre>
    </div>
  );

  return (
    <CodeEditorStyles level={level}>
      <div className='row col-12'>
      <div className="col-6 editor">
        <Tabs
          tabkeys={["tab--html", "tab--css", "tab--js"]}
          tabnames={["HTML", "CSS", "JS"]}
          contents={[<div key="0" id="codemirror-editor-wrapper-html" />, <div key="1" id="codemirror-editor-wrapper-css" />, <div key="2" id="codemirror-editor-wrapper-js" />]}
        />
        </div>
        <div className='col-6 output'>
          <OutputIframe />            
        </div>
      </div>
    </CodeEditorStyles>
    )
}