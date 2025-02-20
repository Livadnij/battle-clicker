import React, { FC } from "react";

import style from "./FightRow.module.scss";
import { BattleLogType } from "../../../../types/types";
import ArrowUser from "../../../../assets/layout/fight/log-arrow.svg";
import ArrowBot from "../../../../assets/layout/fight/log-arrow-2.svg";

type FightRowProps = {
  log: BattleLogType;
};

const FightRow: FC<FightRowProps> = ({ log }) => {
  const { description, success, time, userSide, title } = log;
  console.log(log);
  const status = "WON";
  return (
    <div className={style["fight-row"]}>
      <div className={style["fight-row__row"]}>
        <div className={style["fight-row__row-time"]}>{time}</div>
        <div className={style["fight-row__row-title"]}>{title}</div>
      </div>
      <div className={style["fight-row__row"]}>
        <img
          src={userSide ? ArrowUser : ArrowBot}
          className={style["fight-row__row-icon"]}
        />
        <div className={style["fight-row__row-description"]}>{description}</div>
      </div>
      <div className={style["fight-row__status"]}>
        {success ? "you won" : "you lost"}
      </div>
      <div className={style["fight-row__underline"]} />
    </div>
  );
};

export default FightRow;
