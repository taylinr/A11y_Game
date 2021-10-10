import AriaModal from "react-aria-modal";
import React, { useEffect, useState } from "react";
import BadgeStyles from "./BadgeStyles";
import gold from "./image/goldbadge.png";
import CloseButtonStyles from "./CloseButtonStyles";
import closeIcon from "../../assets/close-icon.svg";
import Image from "next/image";

type ModalProps = {
  titleText: string;
  id: string;
  badge: number;
  handleClose: () => void;
};

const Badge = ({ badge, titleText, id, handleClose }: ModalProps) => {
  const overlay = React.useRef(null);

  const handleOuterClose = (e: React.MouseEvent) => {
    if (overlay.current !== e.target) return;

    handleClose();
  }

  const getBadge = (badge: number) => {
    let imgsrc: string = "";

    if (badge == 1) {
      imgsrc = "/images/badges/badge_bronze.png";
    } else if (badge == 2) {
      imgsrc = "/images/badges/badge_silver.png";
    } else if (badge == 3) {
      imgsrc = "/images/badges/badge_gold.png";
    }

    return imgsrc;
  };

  return (
    <AriaModal
      titleText={titleText}
      initialFocus={"#" + id}
      includeDefaultStyles={false}
    >
      <BadgeStyles id={id} onClick={handleOuterClose} ref={overlay}>
        <CloseButtonStyles onClick={handleClose}>
          <Image src={closeIcon} alt="close-modal-icon" />
        </CloseButtonStyles>
        <Image
          src={getBadge(badge)}
          height={618}
          width={384}
          alt={titleText}
          priority={true}
        />
        <h1>Congratulations, you won a Badge!</h1>
      </BadgeStyles>
    </AriaModal>
  );
};
export default Badge;
