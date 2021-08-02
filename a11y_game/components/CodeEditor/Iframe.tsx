import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import IframeStyles from "./IframeStyles";

type IframeProps = {
    children: any
    head: any
    level?: string
}

export default function IFrame ({ children, head, ...props }:IframeProps)  {
    const [contentRef, setContentRef] = useState<any>(null);
    const mountNode = contentRef?.contentWindow?.document?.body
    const mountHead =
    contentRef?.contentWindow?.document?.head

    return (
    <iframe {...props} ref={setContentRef} width="100%">
        {mountHead && createPortal(head, mountHead)}
        {mountNode && createPortal(children, mountNode)}
    </iframe>
    )
}
