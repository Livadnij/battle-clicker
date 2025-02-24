import React, { FC } from "react";

import style from "./FightRow.module.scss";
import { motion } from "framer-motion";
import { BattleLogType } from "../../../../types/types";
import ArrowUser from "../../../../assets/layout/fight/log-arrow.svg";
import ArrowBot from "../../../../assets/layout/fight/log-arrow-2.svg";

type FightRowProps = {
  log: BattleLogType;
};

const FightRow: FC<FightRowProps> = ({ log }) => {
  const { description, success, time, userSide, title } = log;

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }} // Начальное положение
      animate={{ y: 0, opacity: 1 }} // Финальное положение
      transition={{ type: "spring", stiffness: 100 }}
      className={style["fight-row"]}
    >
      <div className={style["fight-row__row"]}>
        <div className={style["fight-row__row-time"]}>{time}</div>
        <div className={style["fight-row__row-title"]}>{title}</div>
      </div>
      <div className={style["fight-row__second-row"]}>
        <div className={style["fight-row__column"]}>
          <img
            alt="side arrow"
            src={userSide ? ArrowUser : ArrowBot}
            className={style["fight-row__row-icon"]}
          />
          <div className={style["fight-row__row-description"]}>
            {description}
          </div>
        </div>
        <div className={style[`fight-row__status-won`]}>{success}</div>
        {/* ${
                success === "draw"
                  ? "draw"
                  : success === "you won"
                  ? "won"
                  : "lost"
              } */}
      </div>
      <div className={style["fight-row__underline"]} />
    </motion.div>
  );
};

export default FightRow;
