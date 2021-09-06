import React, { useState } from "react";
import { createPortal } from "react-dom";
import IframeStyles from "./IframeStyles";
import styled from "styled-components";
import SpeechSynthesis from "../SpeechSynthesiser/SpeechSynthesiser";

type IframeProps = {
  // children: React.ReactNode;
  // head: React.ReactNode;
  html: string;
  css: string;
  level?: string;
  toggleSwitchLabel?: string;
  toggle: boolean;
};

interface ToggleProps {
  toggleActive?: boolean;
}

const ToggleSwitch = styled.input<ToggleProps>`
  opacity: 0;
  pointer-events: none;

  /* checked states */
  :checked + .md_switch__toggle::before,
  :checked + .md_switch__toggle::after {
    background: #3b6b76;
  }

  :checked + .md_switch__toggle::after {
    transform: translate(calc(3em - 100%), -50%);
  }
`;

const IFrame = ({
  css,
  html,
  level,
  toggle,
  toggleSwitchLabel,
  ...props
}: IframeProps) => {
  const [contentRef, setContentRef] = useState<any>(null);
  const mountNode = contentRef?.contentWindow?.document?.body;
  const mountHead = contentRef?.contentWindow?.document?.head;

  const [toggleActive, setActive] = useState<boolean>(true);

  const speakerText: string = "";

  const htmlWithoutImageSRC: string = html.includes("img")
    ? html.replace("src", "")
    : html;

  const newHTML: string =
    level == "screenreader"
      ? toggleActive
        ? htmlWithoutImageSRC
        : html
      : html;

  const cssForAria: string =
    ".tabcontent{display: none;} .tabcontent.active{display: block;} button {border: none; background: none; padding: 0;}";

  const newCSS: string =
    level == "aria" ? (toggleActive ? cssForAria : css) : css;

  const head: React.ReactNode = (
    <style dangerouslySetInnerHTML={{ __html: newCSS }}></style>
  );

  const body: React.ReactNode = (
    <div
      className="Container"
      dangerouslySetInnerHTML={{ __html: newHTML }}
    ></div>
  );

  return (
    <IframeStyles level={level} toggleActive={toggleActive} toggle={toggle}>
      {toggle ? (
        <div className="switch__wrapper">
          <label className="md_switch">
            <ToggleSwitch
              type="checkbox"
              onClick={() => {
                setActive(!toggleActive);
              }}
              defaultChecked={toggleActive}
            />
            {toggleSwitchLabel}
            <span className="md_switch__toggle"></span>
          </label>
          {level == "screenreader" || level == "aria" ? (
            <SpeechSynthesis html={html} />
          ) : null}
        </div>
      ) : null}

      <iframe
        {...props}
        ref={setContentRef}
        width="100%"
        title="Visually-Rendered-Code-Editor-Output"
        aria-label="Visually rendered code editor output"
        id={level}
      >
        {level == "screenreader"
          ? toggleActive
            ? null
            : mountHead && createPortal(head, mountHead)
          : mountHead && createPortal(head, mountHead)}
        {mountNode && createPortal(body, mountNode)}
      </iframe>
    </IframeStyles>
  );
};

export default IFrame;
