import React, { FC } from "react";

import style from "./FightRow.module.scss";
import { BattleLogType } from "../../../../types/types";
import ArrowUser from "../../../../assets/layout/fight/log-arrow.svg";
import ArrowBot from "../../../../assets/layout/fight/log-arrow-2.svg";

type FightRowProps = {
    log: BattleLogType;
};

const FightRow: FC<FightRowProps> = ({log}) => {
    const turn = true
    const title = "SMASH THEM!"
    const description = "PALAHNIUK HITS YOU IN THE LEGS. YOU COULDN’T BLOCK THE ATTACK"
    const status = "WON"
    return (
        <div className={style["fight-row"]}>
            <div className={style["fight-row__row"]}>
                <div className={style["fight-row__row-time"]}>
                    {log.time}
                </div>
                <div className={style["fight-row__row-title"]}>
                    {title}
                </div>
            </div>
            <div className={style["fight-row__row"]}>
                <img src={turn ? ArrowUser : ArrowBot} className={style["fight-row__row-icon"]}/>
                <div className={style["fight-row__row-description"]}>
                    {description}
                </div>
            </div>
            <div className={style["fight-row__status"]}>{status}</div>
            <div className={style["fight-row__underline"]}/>
        </div>
    );
};

export default FightRow;
