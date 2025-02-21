import React, { FC, useEffect, useRef } from "react";
import styles from "./battleLog.module.scss";
import WelcomeRow from "./welcomeRow/WelcomeRow";
import FightRow from "./fightRow/FightRow";
import FinishRow from "./finishRow/FinishRow";
import { BattleLogType } from "types/types";
import { useUser } from "context/UserContext";

type BattleLogProps = {
  userName: string;
  botName: string;
  logArray: BattleLogType[];
  isWinner: string | undefined;
};

const BattleLog: FC<BattleLogProps> = ({
  userName,
  botName,
  logArray,
  isWinner,
}) => {
  const { user } = useUser();
  const logContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logArray]);
  return (
    <div className={styles["log-container"]} ref={logContainerRef}>
      <WelcomeRow userName={userName} botName={botName} />
      {logArray.map((log, index) => (
        <FightRow key={index} log={log} />
      ))}
      {isWinner ? (
        <FinishRow
          winnerName={isWinner ? isWinner : ""}
          winnerTurn={isWinner !== user?.username}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default BattleLog;
