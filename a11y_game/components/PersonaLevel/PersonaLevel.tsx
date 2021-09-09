import Link from "next/link";
import Image from "next/image";
import PersonaStyles from "./PersonaStyles";

type PersonaProps = {
  name: string;
  emotion: string;
  alt: string;
  valid?: boolean;
  validationText?: string;
};

const Persona = ({
  name,
  emotion,
  alt,
  valid,
  validationText,
}: PersonaProps) => {
  return (
    <PersonaStyles valid={valid}>
      <div className={"persona__wrapper"}>
        <Image
          src={"/images/" + name.toLowerCase() + "_head_talking.gif"}
          height={170}
          width={170}
          className={"persona__image"}
          alt={alt}
          priority={true}
        />
      </div>
      <div className="speechbubble__wrapper">
        <div className="speechbubble">
          <p>{validationText}</p>
        </div>
      </div>
    </PersonaStyles>
  );
};

export default Persona;
