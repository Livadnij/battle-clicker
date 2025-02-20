import React, { FC, useState } from "react";
import pickSection from "../../../assets/layout/fight/pick-section.svg";
import styles from "./BattleInterface.module.scss";
import { ReactComponent as Banner } from "../../../assets/layout/fight/log/banner.svg";
import { ReactComponent as Stripes } from "../../../assets/layout/fight/log/stripes.svg";

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

  return (
    <div className={styles["container"]}>
      <Banner className={styles["container__banner"]} />
      <div className={styles["container__background"]}>
        <Stripes />
        <Stripes />
      </div>
      <div className={styles["button-container"]}>
        {areas.map((area: any, index: number) => (
          <button
            onClick={() => handleClick(index)}
            className={`${styles["button-container__main-item"]} ${
              index === useChoice
                ? styles["button-container__main-item__selected"]
                : ""
            }`}
          >
            <div className={styles["button-container__item-header"]}>
              {area.image}
            </div>
            <div className={styles["button-container__item-footer"]}>
              {area.title.toUpperCase()}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BattleInterface;
