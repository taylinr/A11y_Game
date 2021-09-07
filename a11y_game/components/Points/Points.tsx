import PointsStyles from "./PointsStyles";
import points from "../../assets/points.svg";
import Image from "next/image";

type PointsProps = {
  currVal: number;
  maxVal?: number;
};

const Points = ({ currVal, maxVal }: PointsProps) => {
  return (
    <PointsStyles>
      <Image src={points} alt="points-icon" />

      <span>
        {currVal} {maxVal ? " / " + maxVal : null} Point
        {currVal == 1 ? null : "s"}
      </span>
    </PointsStyles>
  );
};
export default Points;
