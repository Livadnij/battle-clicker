import React, { FC } from "react";
import { BattleLogType } from "../../../types/types";

import style from "./BattleLog.module.scss";

type BattleLogProps = {
  logArray: BattleLogType[];
};

const BattleLog: FC<BattleLogProps> = ({ logArray }) => {
  return (
    <div className={style["log-container"]}>
      <h3> Battle log :</h3>
      <div className={style["log"]}>
        <ul>
          {logArray?.map((data, index) => {
            return <li key={index}>{`${data.time} - ${data.log}`}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default BattleLog;
