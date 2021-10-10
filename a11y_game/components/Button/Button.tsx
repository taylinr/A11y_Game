import Link from "next/link";
import ButtonStyles from "./ButtonStyles";

type ButtonProps = {
  children: React.ReactNode;
  target?: string;
  primary?: boolean;
  secondary?: boolean;
  accomplished?: boolean;
  inactive?: boolean;
  help?: boolean;
  onClick?: () => void;
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
  type,
  help,
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
            help={help}
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
        help={help}
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
        help={help}
      >
        {children}
      </ButtonStyles>
    );
  }
};
export default Button;
