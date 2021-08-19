
import { Code } from '../../model/code.model';
import { CSSObject } from '../../model/css.model';
import { HTMLStyles } from '../../model/htmlStyles.model';
import { parse, HTMLElement, Node } from 'node-html-parser';

var htmlStylesArray: HTMLStyles[] = [];

const addNodeToHTMLStylesArray = (node: Node, properties: string[]) => {

    var exsistsAlready: boolean = false;

    htmlStylesArray.forEach(htmlStyle => {
        if (node.toString() == htmlStyle.node.toString()) {
            //the node is already in the Array
            exsistsAlready = true;

            htmlStyle.properties.forEach(exsistingProp => {

                properties.forEach(newProp => {
                    if (newProp != "" && exsistingProp != "") {
                        let exsistingPropName = exsistingProp.split(':')[0];
                        let newPropName = newProp.split(':')[0];

                        if (exsistingPropName == newPropName) {
                            //property exsists in current styles
                            exsistingProp = newProp;
                        } else {
                            //add property to current styles
                            htmlStyle.properties.push(newProp);
                        }
                    }
                });
            });
        }
    });

    if (!exsistsAlready) {
        htmlStylesArray.push(new HTMLStyles(node, properties));
    }
}

const getCSSPropsFromStylesArray = (node: Node | ParentNode) => {
    var props: string[] = [];

    htmlStylesArray.forEach(htmlStyle => {
        if (node.toString() == htmlStyle.node.toString()) {
            props = htmlStyle.properties;
        }
    });

    return props;
}

const parseCSSObjectArray = (code: Code) => {
    const CSSArray: string[] = code.CSS;
    var CSS: string = "";

    CSSArray.forEach(line => {
        CSS += line;
    });

    const cssLineArray: string[] = CSS.replaceAll(/\s/g,'').split('}');
    const cssObject: CSSObject[] = [new CSSObject([], [])];

    cssLineArray.forEach(line => {
        var x: string[] = line.split('{');
        var selectors: string = x[0];
        var cssProperties: string = x[1];
        var selectorsArray: string[] = [];
        var cssPropertiesArray: string[] = [];

        if (selectors && cssProperties) {
            selectorsArray = selectors.split(',');
            cssPropertiesArray = cssProperties.split(';');
        }
        cssObject.push(new CSSObject(selectorsArray, cssPropertiesArray));
    });

    return cssObject;
}

const parseHTMLObject = (code: Code) => {
    let HTMLArray: string[] = code.HTML;
    let HTML: string = "";
    HTMLArray.forEach(line => {
        HTML += line;
    });

    HTML = '<html><body>' + HTML + '</body></html>';    
    const htmlObject: HTMLElement = parse(HTML);
    htmlObject.removeWhitespace();

    return htmlObject;
}

const getCSSForNode = (element: Node, cssObject: CSSObject[], htmlArray: HTMLElement) => {
    var props: string[] = [];
    var isInCSS: boolean = false;

    cssObject.forEach(selectorArray => {
        selectorArray.Selectors.forEach(selector => {
            let testElements: HTMLElement[] = htmlArray.querySelectorAll(selector);

            testElements.forEach(testElement => {
                var isSameElement: boolean = (testElement && element) ? testElement.toString() == element.toString() : false;

                if (isSameElement) {
                    isInCSS = true;
                    
                    props = selectorArray.Properties;                    
                }
            });
        });
    });

    return props;    
}

const recurseDomChildren = (start: Node, cssObject: CSSObject[], htmlArray: HTMLElement) =>
{
    var nodes: Node [];
    if(start.childNodes)
    {
        nodes = start.childNodes as Node[];
        loopNodeChildren(nodes, cssObject, htmlArray);
    }
}

const loopNodeChildren = (nodes: Node[], cssObject: CSSObject[], htmlArray: HTMLElement) =>
{
    var node;
    if (nodes) {
        for(var i=0;i<nodes.length;i++)
        {
            node = nodes[i];
            // setCSSPropsForHTMLElement(node, cssObject, htmlArray);

            addNodeToHTMLStylesArray(node, getCSSForNode(node, cssObject, htmlArray));
            
            if(node.childNodes)
            {
                recurseDomChildren(node, cssObject, htmlArray);
            }
        }
    }
}

export function checkContrast(code: Code) {

    var valid: boolean = true;
    var lowestContrast: number = 100.0;

    const cssObject: CSSObject[] = parseCSSObjectArray(code);
    const htmlObject: HTMLElement = parseHTMLObject(code);

    htmlStylesArray = [];

    recurseDomChildren(htmlObject, cssObject, htmlObject);

    function hexToRgb(hex: string) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16)]
         : [0, 0 ,0];
    }

    const transformColors = (color: string) => {
        let rgb: number[] = [];

        if (color.startsWith('#')) {
            rgb = hexToRgb(color);
        } else if (color.startsWith('rgb')) {
            var colorsubstr: string[] = color.split(')')[0].substr(3).split(',');
            colorsubstr.forEach(str => {
                rgb.push(parseInt(str));
            });
        } else {
            switch (color) {
                case 'black':
                    rgb = [0, 0, 0]
                    break;
                case 'silver':
                    rgb = [192,192,192]
                    break;
                case 'gray':
                    rgb = [128,128,128]
                    break;
                case 'white':
                    rgb = [255, 255, 255]
                    break;
                case 'maroon':
                    rgb = [128,0,0]
                    break;
                case 'red':
                    rgb = [255,0,0]
                    break;
                case 'purple':
                    rgb = [128,0,128]
                    break;
                case 'fuchsia':
                    rgb = [255,0,255]
                    break;
                case 'green':
                    rgb = [0,128,0]
                    break;
                case 'lime':
                    rgb = [0,255,0]
                    break;
                case 'olive':
                    rgb = [128,128,0]
                    break;
                case 'yellow':
                    rgb = [255,255,0]
                    break;
                case 'navy':
                    rgb = [0,0,128]
                    break;
                case 'blue':
                    rgb = [0,0,255]
                    break;
                case 'teal':
                    rgb = [0,128,128]
                    break;
                case 'aqua':
                    rgb = [0,255,255]
                    break;
            }
        }

        return rgb;
    }

    const calculateLum = (color: string) => {

        //Formular from W3C to calculate a colors luminance

        let rgb: number[] = [];

        rgb = transformColors(color);

        var r: number = 0;
        var g: number = 0;
        var b: number = 0;

        if (rgb) {
            r = rgb[0] / 255;
            g = rgb[1] / 255;
            b = rgb[2] / 255;
        }

        r = r <= 0.03928 ? r / 12.92 : Math.pow(((r + 0.055) / 1.055), 2.4);
        g = g <= 0.03928 ? g / 12.92 : Math.pow(((g + 0.055) / 1.055), 2.4);
        b = b <= 0.03928 ? b / 12.92 : Math.pow(((b + 0.055) / 1.055), 2.4);
        
        return ((r*0.2126)+(g*0.7152)+(b*0.0722));
    }

    const calculateContrastRatio = (color1: string, color2: string) => {
        
        const lum1: number = calculateLum(color1);
        const lum2: number = calculateLum(color2);

        const contrastRatio: number = (lum1 >= lum2)
            ? (lum1 + 0.05) / (lum2 + 0.05)
            : (lum2 + 0.05) / (lum1 + 0.05);
        
        return contrastRatio;
    }


   
    for (let i = 0; i < htmlStylesArray.length && valid; i++){

        var backgroundColor: string = '';
        var fontColor: string = '';


        const currentProperties: string[] = htmlStylesArray[i].properties;
        const currentNode = htmlStylesArray[i].node;

        if (currentNode.nodeType == 3) {
            currentProperties.forEach(property => {
                if (property.includes('background-color')) {
                    backgroundColor = property.split(':')[1];
                } else if (property.includes('color') && !property.includes('background-color')) {
                    fontColor = property.split(':')[1];
                }
            });

            var parentNode = currentNode.parentNode;

            while (parentNode && (backgroundColor == '' || fontColor == '')) {
                if (parentNode) {
                    var props: string[] = getCSSPropsFromStylesArray(parentNode);
                    props.forEach(property => {
                        if (property.includes('background-color') && backgroundColor == '') {
                            backgroundColor = property.split(':')[1];
                        } else if (property.includes('color') && !property.includes('background-color') && fontColor == '') {
                            fontColor = property.split(':')[1];
                        }
                    });

                    parentNode = parentNode.parentNode;
                }
            }
    
            backgroundColor = (backgroundColor == '') ? '#FFFFFF' : backgroundColor;
            fontColor = (fontColor == '') ? '#000000' : fontColor;

            const contrastRatio: number = calculateContrastRatio(backgroundColor, fontColor)

            if (contrastRatio < lowestContrast) {
                lowestContrast = contrastRatio;
            }
        }
    }

    // const valid : boolean = contrastRatio >= 5.0;
    return lowestContrast;
}