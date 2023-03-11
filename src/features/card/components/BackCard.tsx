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
      <p className={classes.BackCardTitle}>Reverse Success!!!</p>
      <ul className={classes.BackCardList}>
        <li>Use React.</li>
        <li>Use Vite.</li>
        <li>Use FramerMotion.</li>
        <li>Wrriten by Typescript.</li>
        <li>Styled by css modules and tailwindcss.</li>
      </ul>
    </motion.div>
  );
}
