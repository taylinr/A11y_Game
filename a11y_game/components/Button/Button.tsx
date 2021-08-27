import Link from "next/link";
import ButtonStyles from "./ButtonStyles";

type ButtonProps = {
  children: React.ReactNode;
  target?: string;
  primary?: boolean;
  secondary?: boolean;
  accomplished?: boolean;
  inactive?: boolean;
  onClick?: () => void;
  onAddPoints?: (num: number) => void;
  type?: "button" | "submit" | "reset" | undefined;
};

const Button = ({
  children,
  target,
  primary,
  secondary,
  accomplished,
  inactive,
  onClick,
  onAddPoints,
  type,
}: ButtonProps) => {
  if (!inactive && target) {
    return (
      <Link href={target}>
        <a>
          <ButtonStyles
            primary={primary}
            secondary={secondary}
            accomplished={accomplished}
            role={"button"}
            onClick={onClick}
            type={type}
          >
            {children}
          </ButtonStyles>
        </a>
      </Link>
    );
  } else if (!inactive && !target) {
    return (
      <ButtonStyles
        primary={primary}
        secondary={secondary}
        accomplished={accomplished}
        onClick={onClick}
        role={"button"}
        type={type}
      >
        {children}
      </ButtonStyles>
    );
  } else {
    return (
      <ButtonStyles
        inactive={inactive}
        disabled
        aria-describedby={"Disabled because previous level is not finished yet"}
        type={type}
      >
        {children}
      </ButtonStyles>
    );
  }
};
export default Button;
