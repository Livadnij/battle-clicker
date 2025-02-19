import React, { FC } from "react";
import { BattleLogType, ScoreType } from "../../../types/types";

import style from "./Log.module.scss";
import LogContainerSvg from "./LogContainerSvg";
import WelcomeRow from "./welcomeRow/WelcomeRow";
import FightRow from "./fightRow/FightRow";

import { ReactComponent as ScoreBanner } from "../../../assets/layout/fight/score/banner.svg";
import { ReactComponent as BattleLogBanner } from "../../../assets/layout/fight/score/battle-log-banner.svg";
import { getAvatar } from "helpers/getAvatar";

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
          <BattleLogBanner className={style["image-score-container__banner"]} />
        </div>
      </div>
      <div className={style["log__over-main"]}>
        <WelcomeRow userName={userName} botName={botName} />
        {logArray.map((log, index) => (
          <FightRow key={index} log={log} />
        ))}
      </div>
    </div>

    // <div className={style["log"]}>
    //   <div className={style["log__title"]}>
    //     <div className={style["log__title-name"]}>{userName.toUpperCase()}</div>
    //     <div className={style["log__title-name"]}>{botName.toUpperCase()}</div>
    //   </div>
    //   <div className={style["log__container"]}>
    //     {/* <LogContainerSvg className={style["log__background"]} score={score}/> */}
    //     <div className={style["log__over"]}>
    //       <div className={style["log__over-header"]}>
    //         <span className={style["log__row-title"]}>SCORE</span>
    //         <div className={style["log__row-container"]}>
    //           <div className={style["log__row-score"]}>
    //             <img
    //               className={style["log__user-avatar"]}
    //               src={userAvatar}
    //               alt="user-avatar"
    //             />
    //             <img
    //               className={style["log__bot-avatar"]}
    //               src={botAvatar}
    //               alt="user-avatar"
    //             />
    //             <span>{score.userScore}</span>
    //             <span style={{ transform: "translateY(-3px)" }}>:</span>
    //             <span>{score.botScore}</span>
    //           </div>
    //         </div>
    //         <div className={style["log__row-log"]}>BATTLE LOG</div>
    //       </div>
    //       <div className={style["log__over-main"]}>
    //         <WelcomeRow userName={userName} botName={botName} />
    //         {logArray.map((log, index) => (
    //           <FightRow key={index} log={log} />
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default BattleLog;
