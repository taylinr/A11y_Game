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
      >
        {children}
      </ButtonStyles>
    );
  }
};
export default Button;
