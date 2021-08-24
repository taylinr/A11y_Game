import AriaModal from "react-aria-modal";
import React, { useEffect, useState } from "react";
import ModalStyles from "./ModalStyles";
import ModalBodyStyles from "./ModalBodyStyles";
import CloseButtonStyles from "./CloseButtonStyles";
import closeIcon from "../../assets/close-icon.svg";
import Image from "next/image";

type ModalProps = {
  children: React.ReactNode;
  titleText: string;
  id: string;
  handleClose: () => void;
};

const Modal = ({ children, titleText, id, handleClose }: ModalProps) => {
  const overlay = React.useRef(null);

  function handleOuterClose(e: React.MouseEvent) {
    if (overlay.current !== e.target) return;

    handleClose();
  }

  return (
    <AriaModal
      titleText={titleText}
      initialFocus={"#" + id}
      includeDefaultStyles={false}
    >
      <ModalStyles id={id} onClick={handleOuterClose} ref={overlay}>
        <ModalBodyStyles>
          <CloseButtonStyles onClick={handleClose}>
            <Image src={closeIcon} alt="close-modal-icon" />
          </CloseButtonStyles>
          {children}
        </ModalBodyStyles>
      </ModalStyles>
    </AriaModal>
  );
};
export default Modal;
