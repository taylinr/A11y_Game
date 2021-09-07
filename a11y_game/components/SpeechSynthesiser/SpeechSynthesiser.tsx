import speaker from "../../assets/speaker.svg";
import pause from "../../assets/pause.svg";
import Image from "next/image";
import SpeechSynthesiserStyles from "./SpeechSynthesiserStyles";
import { useState } from "react";
import { parse, HTMLElement, Node } from "node-html-parser";

type Props = {
  html: string;
};

var text: string = "";

const recurseDomChildren = (start: HTMLElement, htmlArray: HTMLElement) => {
  let nodes: HTMLElement[];
  if (start.childNodes) {
    nodes = start.childNodes as HTMLElement[];
    loopNodeChildren(nodes, htmlArray);
  }
};

const loopNodeChildren = (nodes: HTMLElement[], htmlArray: HTMLElement) => {
  let node;
  if (nodes) {
    for (let i = 0; i < nodes.length; i++) {
      node = nodes[i];
      // setCSSPropsForHTMLElement(node, cssObject, htmlArray);

      addNodeToText(node);
      if (node.childNodes) {
        recurseDomChildren(node, htmlArray);
      }
    }
  }
};

const setSpeechString = (html: String) => {
  let newHtml: string = html.replace("\n", "");

  const htmlObject: HTMLElement = parse(newHtml);

  htmlObject.removeWhitespace();

  recurseDomChildren(htmlObject, htmlObject);
};

const addNodeToText = (node: HTMLElement) => {
  let newText = "";
  let isHidden = false;

  if (node.nodeType == 1) {
    switch (node.tagName) {
      case "BUTTON":
        newText = " button";
        break;
      case "H3":
        newText = " heading";
        break;
    }

    if (node.hasAttribute("aria-labelledby")) {
      newText = node.getAttribute("aria-labelledby")
        ? " " + (node.getAttribute("aria-labelledby") as string)
        : " " + newText;
    }

    if (node.hasAttribute("aria-describedby")) {
      newText = node.getAttribute("aria-describedby")
        ? " " + (node.getAttribute("aria-describedby") as string)
        : " " + newText;
    }

    if (node.hasAttribute("aria-label")) {
      newText = node.getAttribute("aria-label")
        ? " " + (node.getAttribute("aria-label") as string)
        : " " + newText;
    }

    if (node.hasAttribute("aria-controls")) {
      newText = node.getAttribute("aria-controls")
        ? " " + (node.getAttribute("aria-controls") as string)
        : " " + newText;
    }

    if (node.hasAttribute("alt")) {
      newText = node.getAttribute("alt")
        ? " " + (node.getAttribute("alt") as string)
        : " " + newText;
    }

    if (node.hasAttribute("role")) {
      let role = node.getAttribute("role");

      if (role != undefined) {
        if (role != "presentation") {
          newText = " " + role;
          if (role == "tablist") {
            node.childNodes.forEach((childNode) => {
              if (childNode.nodeType == 1) {
                let newChildNode = childNode as HTMLElement;
                if (
                  newChildNode.hasAttribute("role") &&
                  newChildNode.getAttribute("role") == "tab"
                ) {
                  let value =
                    " " +
                    (node.childNodes.indexOf(childNode) + 1) +
                    " of " +
                    node.childNodes.length;

                  newChildNode.setAttribute("tablistvalue", value);
                }
              }
            });
          }
        } else {
          newText = "";
        }
      }
    }

    if (node.hasAttribute("tablistvalue")) {
      newText = newText + " " + node.getAttribute("tablistvalue") + " ";
    }

    if (node.hasAttribute("aria-selected")) {
      console.log(node);
      if (node.getAttribute("aria-selected") == "true") {
        newText = newText + " " + "selected";

        console.log(newText);
      }
    }

    if (node.hasAttribute("aria-hidden")) {
      if (node.getAttribute("aria-hidden") == "true") {
        isHidden = true;
      }
    }

    if (node.hasAttribute("hidden")) {
      isHidden = true;
    }
  }

  if (node.nodeType == 3) {
    newText = node.text;
  }

  let currentNode = node;
  let parentNode = currentNode.parentNode;

  while (parentNode && !isHidden) {
    if (parentNode.nodeType == 1) {
      if (parentNode.hasAttribute("aria-hidden")) {
        if (parentNode.getAttribute("aria-hidden") == "true") {
          isHidden = true;
        }
      }

      if (parentNode.hasAttribute("hidden")) {
        isHidden = true;
      }
    }

    currentNode = parentNode;
    parentNode = currentNode.parentNode;
  }

  if (isHidden) {
    newText = "";
  }

  text = text + " " + newText;
};

const SpeechSynthesis = ({ html }: Props) => {
  text = "";
  setSpeechString(html);

  let textToSpeech = text;

  const [isSpeaking, setSpeaking] = useState<boolean>(false);

  const toggleSpeak = (text: string) => {
    const synth = window.speechSynthesis;
    const voices = synth.getVoices();
    const msg = new SpeechSynthesisUtterance();
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === "Microsoft Zira - English (United States)") {
        msg.voice = voices[i];
      }
    }

    if (synth.speaking) {
      synth.cancel();
      setSpeaking(false);
    } else {
      console.log(text);
      msg.text = text;

      synth.speak(msg);
      setSpeaking(true);
      msg.onend = () => {
        setSpeaking(false);
      };
    }
  };

  return (
    <SpeechSynthesiserStyles
      onClick={() => {
        toggleSpeak(textToSpeech);
      }}
    >
      {isSpeaking ? "pause" : "play"}
      {isSpeaking ? (
        <Image src={pause} alt="pause-icon" />
      ) : (
        <Image src={speaker} alt="speaker-icon" />
      )}
    </SpeechSynthesiserStyles>
  );
};
export default SpeechSynthesis;
