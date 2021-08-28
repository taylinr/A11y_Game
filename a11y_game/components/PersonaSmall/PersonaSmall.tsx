import Link from "next/link";
import Image from "next/image";
import PersonaStyles from "./PersonaSmallStyles";

type PersonaProps = {
  name: string;
  emotion: string;
  alt: string;
  text?: string;
};

const Persona = ({ name, alt, text, emotion }: PersonaProps) => {
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
