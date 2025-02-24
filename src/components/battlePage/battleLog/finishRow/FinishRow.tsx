import React, { FC } from "react";
import { motion } from "framer-motion";
import style from "./FinishRow.module.scss";

type FinishRowProps = {
  winnerName: string;
  winnerTurn: boolean;
};

const FinishRow: FC<FinishRowProps> = ({ winnerName, winnerTurn }) => {
  const title = "FIGHT ENDED";
  const subtitle = "THE WINNER IS:";
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }} // Начальное положение
      animate={{ y: 0, opacity: 1 }} // Финальное положение
      transition={{ type: "spring", stiffness: 100 }}
      className={style["finish"]}
    >
      <span className={style["finish__title"]}>{title}</span>
      <div
        className={`${style["finish__info"]} ${
          winnerTurn ? style["user"] : style["bot"]
        }`}
      >
        <span>{subtitle}</span>
        <span>{winnerName.toUpperCase()}</span>
      </div>
    </motion.div>
  );
};

export default FinishRow;
