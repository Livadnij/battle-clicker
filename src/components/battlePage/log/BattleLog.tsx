import React, { FC } from "react";
import { BattleLogType, ScoreType } from "../../../types/types";

import style from "./Log.module.scss";
import LogContainerSvg from "./LogContainerSvg";
import WelcomeRow from "./welcomeRow/WelcomeRow";
import FightRow from "./fightRow/FightRow";

import { ReactComponent as ScoreBanner } from "../../../assets/layout/fight/score/banner.svg";
import { ReactComponent as BattleLogBanner } from "../../../assets/layout/fight/score/battle-log-banner.svg";
import { getAvatar } from "helpers/getAvatar";
import BattleLogBannerScore from "./BattleLogBannerScore";
import FinishRow from "./finishRow/FinishRow";

type BattleLogProps = {
  logArray: BattleLogType[];
  score: ScoreType;
  userName: string;
  botName: string;
  userAvatar: number;
  enemyAvatar: number;
};

const BattleLog: FC<BattleLogProps> = ({
  logArray,
  score,
  userName,
  botName,
  userAvatar,
  enemyAvatar,
}) => {
  return (
    <div className={style["page-container"]}>
      <div className={style["title-container"]}>
        <span className={style["title-container__title-name"]}>{userName}</span>
        <span className={style["title-container__title-name"]}>{botName}</span>
      </div>
      <div className={style["score-container"]}>
        <img
          className={style["score-container__avatar"]}
          src={getAvatar("user", userAvatar)}
          alt="user-avatar"
        />
        <img
          className={style["score-container__avatar"]}
          src={getAvatar("enemy", enemyAvatar)}
          alt="user-avatar"
        />
        <div className={style["score-elements-container"]}>
          <ScoreBanner className={style["score-elements-container__banner"]} />
          <span className={style["score-elements-container__score"]}>
            {score.userScore} : {score.botScore}
          </span>
        </div>
        <div className={style["image-score-container"]}>
          <BattleLogBannerScore
            score={score}
            className={style["image-score-container__banner"]}
          />
        </div>
      </div>
      <div className={style["log__over-main"]}>
        <WelcomeRow userName={userName} botName={botName} />
        {logArray.map((log, index) => (
          <FightRow key={index} log={log} />
        ))}
        <FinishRow winnerName={userName} winnerTurn={true} />
      </div>
    </div>
  );
};

export default BattleLog;
