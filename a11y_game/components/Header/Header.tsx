import HeaderStyles from "./HeaderStyles";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Points from "../Points/Points";
import Context from "../Context/Context";
import { useContext } from "react";

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  const context = useContext(Context);

  return (
    <HeaderStyles>
      <Breadcrumb />

      <Points currVal={context.points} />
    </HeaderStyles>
  );
};

export default Header;
