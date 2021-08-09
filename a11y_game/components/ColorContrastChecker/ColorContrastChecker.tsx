import { useEffect, useState } from 'react'
import CodeEditor from '../CodeEditor/CodeEditor';
import { checkContrast } from '../CodeChecker/CodeChecker';

import { Code } from '../../model/code.model';

type ColorContrastCheckerProps = {
    
}

export default function  ColorContrastChecker (){

    const [code, setCode] = useState<Code>(new Code([''], ['']));
    const [valid, setValid] = useState<boolean>(false);

    const setCodeFromChild = (code: Code) => {
        setCode(code);
    }

    useEffect(function initEditorView() {
        if (checkContrast(code)) {
            setValid(true);
        } else {
            setValid(false)
        }
    }, [code]);

    return (
        <div>
            <CodeEditor
            setCode={setCodeFromChild}
            initialHTML={'<div class="wrapper">\n  <h1 class="hello">Hello <strong>World</strong></h1> \n</div>\n<div>\n  <p> NOOO!!!</p>\n</div>'}
            initialCSS={'body { \n   background-color: red; \n } \n\n h1.hello { \n    color: blue; \n} \n\n strong{ text-decoration: underline;} \n\n p { color: green; filter: grayscale(1);} \n\n div { background-color: yellow; } \n\n .wrapper { background-color: green;}'}
            />
            {valid ? <h1>VALID!!!</h1>: <h1>INVALID!!</h1>}
        </div>
        
    )
    
}
