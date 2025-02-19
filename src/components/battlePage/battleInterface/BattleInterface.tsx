import React, { FC, useState } from "react";
import pickSection from "../../../assets/layout/fight/pick-section.svg";
import styles from "./BattleInterface.module.scss";

type BattleInterfaceProps = {
  areas: any;
  useChoice: number | null;
  setUserChoice: React.Dispatch<React.SetStateAction<number | null>>;
};

const BattleInterface: FC<BattleInterfaceProps> = ({
  areas,
  useChoice,
  setUserChoice,
}) => {
  const handleClick = (index: number) => {
    setUserChoice(index);
  };
  //
  return (
    <div className={styles["battle__main"]}>
      <img className={styles["battle__main-pick"]} src={pickSection} />
      <div className={styles["battle__main-header"]}>
        <span>Pick attack area</span>
      </div>
      <div className={styles["battle__main-items"]}>
        {areas.map((area: any, index: number) => (
          <button
            onClick={() => handleClick(index)}
            className={`${styles["battle__main-item"]} ${
              index === useChoice ? styles["battle__main-item__selected"] : ""
            }`}
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

export default BattleInterface;
