import Link from "next/link";
import Image from "next/image";
import PersonaStyles from "./PersonaStyles";
import inactivebadge from "../../assets/badge-inactive.svg";
import goldbadge from "../../assets/badge-gold.svg";
import silverbadge from "../../assets/badge-silver.svg";
import bronzebadge from "../../assets/badge-bronze.svg";
import Context from "../Context/Context";
import { useContext } from "react";

type PersonaProps = {
  target: string;
  alt: string;
  disability: string;
  name: string;
  age: number;
  pronouns: string;
  text: string;
  inactive?: boolean;
  badge?: number;
  showText: boolean;
  emotion: string;
};

const Persona = ({
  target,
  alt,
  disability,
  name,
  age,
  pronouns,
  text,
  inactive,
  badge,
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

      {inactive ? (
        <div className={"persona__wrapper"}>
          <div className="image__wrapper">
            <Image
              src={"/images/" + target + "_head_" + emotion + ".png"}
              height={230}
              width={230}
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
      ) : (
        <Link href={"/personas/" + target} passHref>
          <div className={"persona__wrapper"}>
            <div className="image__wrapper">
              <Image
                src={
                  "/images/" + name.toLowerCase() + "_head_" + emotion + ".png"
                }
                height={230}
                width={230}
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
      )}
    </PersonaStyles>
  );
};

export default Persona;
