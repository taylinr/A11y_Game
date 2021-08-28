import Link from "next/link";
import Image from "next/image";
import PersonaStyles from "./PersonaStyles";
import inactiveBatch from "../../assets/batch-inactive.svg";
import goldBatch from "../../assets/batch-gold.svg";
import silverBatch from "../../assets/batch-silver.svg";
import bronzeBatch from "../../assets/batch-bronze.svg";
import Context from "../Context/Context";
import { useContext } from "react";

type PersonaProps = {
  target: string;
  alt: string;
  image: string;
  disability: string;
  name: string;
  age: number;
  pronouns: string;
  text: string;
  inactive?: boolean;
  batch?: number;
  showText: boolean;
  emotion: string;
};

const Persona = ({
  target,
  image,
  alt,
  disability,
  name,
  age,
  pronouns,
  text,
  inactive,
  batch,
  showText,
  emotion,
}: PersonaProps) => {
  return (
    <PersonaStyles className="col-3" inactive={inactive}>
      {showText ? (
        <Link href={"/personas/" + target} passHref>
          <div className="speechbubble__wrapper">
            <div className="speechbubble">
              <p>{text}</p>
            </div>
          </div>
        </Link>
      ) : null}
      <Link href={"/personas/" + target} passHref>
        <div className={"persona__wrapper"}>
          <div className="image__wrapper">
            <Image
              src={"/images/" + "dave" + "_head_" + emotion + ".png"}
              height={230}
              width={230}
              className={"persona__image"}
              alt={alt}
              priority={true}
            />
            <div className={"badge__wrapper"}>
              {batch == 0 || batch == undefined ? (
                <Image src={inactiveBatch} alt="empty batch icon" />
              ) : batch == 1 ? (
                <Image src={bronzeBatch} alt="bronze batch icon" />
              ) : batch == 2 ? (
                <Image src={silverBatch} alt="silver batch icon" />
              ) : (
                <Image src={goldBatch} alt="gold batch icon" />
              )}
            </div>
          </div>
          <div className={"persona__info-wrapper"}>
            <p className={"persona__name"}>{name}</p>

            <p className={"persona__age"}>{age} years old</p>
            <p className={"persona__pronouns"}>{pronouns}</p>
            <hr />
            <p className={"persona__disability"}>
              <strong>{disability}</strong>
            </p>
            {/* <hr />
            <p className={"persona__text"}>{text}</p> */}
          </div>
        </div>
      </Link>
    </PersonaStyles>
  );
};

export default Persona;
