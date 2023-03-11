import { BackCard } from "./BackCard";
import { FrontCard } from "./FrontCard";
import classes from "../assets/Card.module.css";
import { useState } from "react";

export function Card(): JSX.Element {
  const [isReverse, setIsReverse] = useState<boolean>(false);
  return (
    <div className={classes.ReversibleCard}>
      <button
        className="relative h-full w-full"
        onClick={() => setIsReverse((isReverse) => !isReverse)}
      >
        <FrontCard isReverse={isReverse} />
        <BackCard isReverse={isReverse} />
      </button>
    </div>
  );
}
