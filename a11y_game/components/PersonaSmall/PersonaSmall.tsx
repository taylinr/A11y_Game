import Link from "next/link";
import Image from "next/image";
import PersonaStyles from "./PersonaSmallStyles";

type PersonaProps = {
  target: string;
  alt: string;
  image: string;
  text?: string;
};

const Persona = ({ image, alt, text }: PersonaProps) => {
  return (
    <PersonaStyles>
      <div className={"persona__wrapper"}>
        <Image
          src={image}
          height={391}
          width={240}
          className={"persona__image"}
          alt={alt}
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
