import CodeMirror from "codemirror";
import CodeEditorStyles from "./CodeEditorStyles";




import { useRef, useEffect, useState } from "react";

import { EditorView, ViewUpdate } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { basicSetup } from "@codemirror/basic-setup";
import { markdown } from "@codemirror/lang-markdown";
import { oneDark } from "@codemirror/theme-one-dark";



export default function CodeEditor() {


  // Local state
  const [editorValue, setEditorValue] = useState<string>("");
  const [editorTreeValue, setEditorTreeValue] = useState<string[]>([]);

  // Ref of the editor
  const editor = useRef<EditorView>();
	
  // Event listener on editor updates
  const onUpdate = () =>
    EditorView.updateListener.of((v: ViewUpdate) => {
      const doc = v.state.doc;

      /**
       * # Contenido
       *
       * ```js
       * const x () => {
       *   console.log(45);
       * }
       * ```
       */
      const value = doc.toString();
      if (value !== editorValue) setEditorValue(value);

      /**
       * [
       *   "# Contenido",
       *   "",
       *   "```js",
       *   "const x () => {",
       *   "  console.log(45);",
       *   "}",
       *   "```"
       * ]
       */
      let treeArray = new Array();
      treeArray = [...doc.toJSON()];

      if (treeArray !== editorTreeValue) setEditorTreeValue(treeArray);
    });
	
  // Initilize view
  useEffect(function initEditorView() {
    const el = document.getElementById("codemirror-editor-wrapper");

    editor.current = new EditorView({
      state: EditorState.create({
        doc: 'initialValue!!!',
        extensions: [basicSetup, markdown(), oneDark, onUpdate()],
      }),
      parent: el as Element,
    });
  }, []);
	
  // Component for display text
  const OutputText = () => (
    <div className="border rounded p-5">
      <pre>
        <code>{editorValue}</code>
      </pre>
    </div>
  );

  // Component for display array from editor
  const OutputArray = () => (
    <div className="border rounded p-5">
      <pre>
        <code>{JSON.stringify(editorTreeValue, null, 2)}</code>
      </pre>
    </div>
  );


    return (
        <CodeEditorStyles>
         <div className='row col-12'>
          <div className="col-6">
            <div id="codemirror-editor-wrapper" />
          </div>
          <div className='col-6'>
            <OutputText />
            <OutputArray />
          </div>
        </div>
        </CodeEditorStyles>
    )
}