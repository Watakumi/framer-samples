import classes from "../assets/Card.module.css";
import { motion } from "framer-motion";
interface Props {
  isReverse: boolean;
}

const variants = {
  reverse: { rotateY: "180deg" },
  unreverse: { rotateY: "0deg" },
};

export function BackCard({ isReverse }: Props): JSX.Element {
  return (
    <motion.div
      transition={{ duration: 0.8 }}
      initial={false}
      animate={isReverse ? "unreverse" : "reverse"}
      variants={variants}
      className={`${classes.Card} ${classes.BackCard}`}
    >
      <p className='text-3xl font-bold'>Reverse Success!!!</p>
    </motion.div>
  );
}
