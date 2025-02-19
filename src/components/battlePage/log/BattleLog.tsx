import React, { FC } from "react";
import { BattleLogType, ScoreType } from "../../../types/types";

import style from "./BattleLog.module.scss";
import LogContainerSvg from "./LogContainerSvg";
import WelcomeRow from "./welcomeRow/WelcomeRow";
import FightRow from "./fightRow/FightRow";

type BattleLogProps = {
    logArray: BattleLogType[];
    score: ScoreType;
    userName: string;
    botName: string;
    userAvatar: any;
    botAvatar: any;
};

const BattleLog: FC<BattleLogProps> = ({logArray, score, userName, botName, userAvatar, botAvatar}) => {
    return (
        <div className={style["log"]}>
            <div className={style["log__title"]}>
                <div className={style["log__title-name"]}>{userName.toUpperCase()}</div>
                <div className={style["log__title-name"]}>{botName.toUpperCase()}</div>
            </div>
            <div className={style["log__container"]}>
                <LogContainerSvg className={style["log__background"]} score={score}/>
                <div className={style["log__over"]}>
                    <div className={style["log__over-header"]}>
                        <div className={style["log__row-title"]}>
                            SCORE
                        </div>
                        <div className={style["log__row-container"]}>
                            <div className={style["log__row-score"]}>
                                <img className={style["log__user-avatar"]} src={userAvatar} alt="user-avatar"/>
                                <img className={style["log__bot-avatar"]} src={botAvatar} alt="user-avatar"/>
                                <span>{score.userScore}</span>
                                <span style={{transform: 'translateY(-3px)'}}>:</span>
                                <span>{score.botScore}</span>
                            </div>
                        </div>
                        <div className={style["log__row-log"]}>
                            BATTLE LOG
                        </div>
                    </div>
                    <div className={style["log__over-main"]}>
                        <WelcomeRow userName={userName} botName={botName}/>
                        {logArray.map((log, index) => (
                            <FightRow key={index} log={log}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BattleLog;
