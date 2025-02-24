import React, { FC, useState } from "react";
import pickSection from "../../../assets/layout/fight/pick-section.svg";
import styles from "./OldInterface.module.scss";

type BattleInterfaceProps = {
  isWinner: string;
  turn: boolean;
  areas: any;
  useChoice: number | null;
  setUserChoice: React.Dispatch<React.SetStateAction<number | null>>;
};

const OldBattleInterface: FC<BattleInterfaceProps> = ({
  isWinner,
  turn,
  areas,
  useChoice,
  setUserChoice,
}) => {
  const handleClick = (index: number) => {
    setUserChoice(index);
  };

  return (
    <div className={styles["battle__main"]}>
      <div className={styles["battle__header"]}>
        <div className={styles["battle__header-line"]}>
          {`pick ${turn ? "attack" : "defend"} area`}
        </div>
      </div>
      <img className={styles["battle__main-pick"]} src={pickSection} />
      <div className={styles["battle__main-items"]}>
        {areas.map((area: any, index: number) => (
          <button
            disabled={isWinner !== ""}
            onClick={() => handleClick(index)}
            className={`${styles["battle__main-item"]} ${
              index === useChoice ? styles["battle__main-item__selected"] : ""
            } ${isWinner ? styles["battle__main-item__disabled"] : ""}`}
          >
            <div className={styles["battle__item-header"]}>{area.image}</div>
            <div className={styles["battle__item-footer"]}>
              {area.title.toUpperCase()}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default OldBattleInterface;
