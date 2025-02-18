import React, { FC } from "react";
import { BattleLogType, ScoreType } from "../../../types/types";

import style from "./BattleLog.module.scss";
import LogContainerSvg from "./LogContainerSvg";

type BattleLogProps = {
    logArray: BattleLogType[];
    score: ScoreType
};

const BattleLog: FC<BattleLogProps> = ({logArray, score}) => {
    console.log(score)
    return (
        <div className={style["log"]}>
            <LogContainerSvg className={style["log__block"]} score={score} />
        </div>
    );
};

export default BattleLog;
