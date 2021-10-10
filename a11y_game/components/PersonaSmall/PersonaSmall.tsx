import Link from "next/link";
import Image from "next/image";
import PersonaStyles from "./PersonaSmallStyles";
import inactivebadge from "../../assets/badge-inactive.svg";
import goldbadge from "../../assets/badge-gold.svg";
import silverbadge from "../../assets/badge-silver.svg";
import bronzebadge from "../../assets/badge-bronze.svg";
import { useState } from "react";

type PersonaProps = {
  name: string;
  emotion: string;
  alt: string;
  text?: string;
  badge?: number;
};

const Persona = ({ badge, name, alt, text, emotion }: PersonaProps) => {
  return (
    <PersonaStyles>
      <div className={"persona__wrapper"}>
        <Image
          src={"/images/" + name.toLowerCase() + "_body_" + emotion + ".png"}
          height={371}
          width={220}
          className={"persona__image"}
          alt={alt}
          priority={true}
        />
        <div className={"badge__wrapper"}>
          {badge == 0 || badge == undefined ? (
            <Image src={inactivebadge} alt="empty badge icon" />
          ) : badge == 1 ? (
            <Image src={bronzebadge} alt="bronze badge icon" />
          ) : badge == 2 ? (
            <Image src={silverbadge} alt="silver badge icon" />
          ) : (
            <Image src={goldbadge} alt="gold badge icon" />
          )}
        </div>
      </div>
      {text ? (
        <div className="speechbubble__wrapper">
          <div className="speechbubble">
            <p>{text}</p>
          </div>
        </div>
      ) : null}
    </PersonaStyles>
  );
};

export default Persona;
