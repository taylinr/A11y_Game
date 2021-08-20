import Link from "next/link";
import Image from "next/image";
import PersonaStyles from "./PersonaSmallStyles";

type PersonaProps = {
  target: string;
  alt: string;
  image: string;
  text: string;
};

const Persona = ({ target, image, alt, text }: PersonaProps) => {
  return (
    <PersonaStyles>
      <div className={"persona__wrapper"}>
        <Image
          src={image}
          height={240}
          width={240}
          className={"persona__image"}
          alt={alt}
        />
      </div>
    </PersonaStyles>
  );
};

export default Persona;
