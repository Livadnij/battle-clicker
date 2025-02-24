import React, { FC } from "react";
import { ScoreType } from "types/types";

import style from "./Log.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { ReactComponent as ScoreBanner } from "../../../assets/layout/fight/score/banner.svg";
import { getAvatar } from "helpers/getAvatar";
import BattleLogBannerScore from "./BattleLogBannerScore";

type BattleLogProps = {
  score: ScoreType;
  userName: string;
  botName: string;
  userAvatar: number;
  enemyAvatar: number;
};

const BattleHeader: FC<BattleLogProps> = ({
  score,
  userName,
  botName,
  userAvatar,
  enemyAvatar,
}) => {
  return (
    <div className={style["header-container"]}>
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
          <div className={style["score-elements-container__score-container"]}>
            <AnimatePresence mode="popLayout">
              <motion.span
                key={`user-${score.userScore}`} // Объединяем ключ
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }} // Добавили анимацию исчезновения
                transition={{ type: "spring", stiffness: 100 }}
                className={style["score-elements-container__score"]}
              >
                {score.userScore}
              </motion.span>
            </AnimatePresence>
            <span>:</span>
            <AnimatePresence mode="popLayout">
              <motion.span
                key={`bot-${score.botScore}`} // Объединяем ключ
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }} // Добавили анимацию исчезновения
                transition={{ type: "spring", stiffness: 100 }}
                className={style["score-elements-container__score"]}
              >
                {score.botScore}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
        <div className={style["image-score-container"]}>
          <BattleLogBannerScore
            score={score}
            className={style["image-score-container__banner"]}
          />
        </div>
      </div>
    </div>
  );
};

export default BattleHeader;
