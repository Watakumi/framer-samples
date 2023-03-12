import { Avatar } from "../../../shares/components/avatar/Avatar";
import { motion } from "framer-motion";
import classes from "../assets/Card.module.css";

interface Props {
  isReverse: boolean;
}

const variants = {
  reverse: { rotateY: "180deg" },
  unreverse: { rotateY: "0deg" },
};

export function FrontCard({ isReverse }: Props): JSX.Element {
  return (
    <motion.div
      transition={{ duration: 0.8 }}
      animate={isReverse ? "reverse" : "unreverse"}
      variants={variants}
      className={`${classes.Card} ${classes.FrontCard}`}
    >
      <div className={classes.ProfileContainer}>
        <div>
          <Avatar
            src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
            name="WA"
          />
        </div>
        <div>
          <p className={classes.FrontCardTitle}>Card</p>
          <p className={classes.FrontCardNote}>Hogehoge</p>
        </div>
      </div>
      <div className={classes.FrontCardDescription}>
        <p>This is a test description.</p>
      </div>
    </motion.div>
  );
}
