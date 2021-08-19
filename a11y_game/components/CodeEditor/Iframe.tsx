import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import IframeStyles from "./IframeStyles";
import styled from 'styled-components'

type IframeProps = {
    children: React.ReactNode
    head: React.ReactNode
    level?: string
    toggleSwitchLabel?:string
}

interface ToggleProps {
  toggleActive?: boolean
}

const ToggleSwitch = styled.input<ToggleProps>`

    opacity: 0;
    pointer-events: none;

    /* checked states */
    :checked+.md_switch__toggle::before,
    :checked+.md_switch__toggle::after{
        background: #3b6b76;
    }

    :checked+.md_switch__toggle::after {
        transform: translate(calc(3em - 100%), -50%);
    }

`;

const IFrame = ({ children, head, level, toggleSwitchLabel, ...props }:IframeProps) => {
    const [contentRef, setContentRef] = useState<any>(null);
    const mountNode = contentRef?.contentWindow?.document?.body
    const mountHead = contentRef?.contentWindow?.document?.head
    
    const [toggleActive, setActive] = useState<boolean>(true);

    return (
        <IframeStyles level={level} toggleActive={toggleActive}>
            <div className='switch__wrapper'>
                <label className="md_switch">
                    <ToggleSwitch type="checkbox" onClick={() => { setActive(!toggleActive); }} defaultChecked={toggleActive} />
                    {toggleSwitchLabel}
                    <span className="md_switch__toggle"></span>
                </label>
            </div>
            <iframe {...props} ref={setContentRef} width="100%" title="output from code editor rendererd as html">
                {mountHead && createPortal(head, mountHead)}
                {mountNode && createPortal(children, mountNode)}
            </iframe>
        </IframeStyles>
    )
}

export default IFrame