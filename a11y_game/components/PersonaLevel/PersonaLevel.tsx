import Link from "next/link";
import Image from "next/image";
import PersonaStyles from "./PersonaStyles";

type PersonaProps = {
  name: string;
  emotion: string;
  alt: string;
  text?: React.ReactNode[];
  valid?: boolean;
  validationText?: string;
};

const Persona = ({
  name,
  emotion,
  alt,
  text,
  valid,
  validationText,
}: PersonaProps) => {
  return (
    <PersonaStyles valid={valid}>
      <div className={"persona__wrapper"}>
        <Image
          src={"/images/" + name.toLowerCase() + "_head_" + emotion + ".png"}
          height={170}
          width={170}
          className={"persona__image"}
          alt={alt}
          priority={true}
        />
      </div>
      {text ? (
        <div className="speechbubble__wrapper">
          <div className="speechbubble">
            <p>{text[0]}</p>
          </div>
        </div>
      ) : null}
      <div className="speechbubble__contrast__wrapper">
        <div className="speechbubble">
          <p>{validationText}</p>
        </div>
      </div>
    </PersonaStyles>
  );
};

export default Persona;
