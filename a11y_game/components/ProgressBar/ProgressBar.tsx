import ProgressBar from "react-customizable-progressbar";
import ProgressBarStyles from "./ProgressBarStyles";

type ProgressProps = {
  val: number;
  maxval: number;
  label: string;
};

const Progress = ({ val, maxval, label }: ProgressProps) => {
  return (
    <ProgressBarStyles>
      <div
        role={"progressbar"}
        aria-valuenow={val}
        aria-valuemin={0}
        aria-valuetext={label}
        aria-valuemax={maxval}
      >
        <ProgressBar
          progress={val}
          radius={90}
          steps={maxval}
          initialAnimation={true}
          transition="1s ease 0.5s"
          trackTransition="0s ease"
          cut={120}
          rotate={-210}
          strokeWidth={20}
          strokeColor="#3e6444"
          trackStrokeColor="#dce6eb"
          trackStrokeWidth={10}
          trackStrokeLinecap="butt"
        >
          <div className="indicator">
            <p>{label}</p>
            <br />
            <p className="number">{val.toFixed(2)}</p>
          </div>
        </ProgressBar>
      </div>
    </ProgressBarStyles>
  );
};

export default Progress;
