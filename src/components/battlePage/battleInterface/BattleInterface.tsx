import React, { FC } from "react";
import pickSection from "../../../assets/layout/fight/pick-section.svg";
import styles from "./BattleInterface.module.scss";

type BattleInterfaceProps = {
  areas: any;
};

const BattleInterface: FC<BattleInterfaceProps> = ({ areas }) => {
  return (
    <div className={styles["battle__main"]}>
      <img className={styles["battle__main-pick"]} src={pickSection} />
      <div className={styles["battle__main-header"]}>
        <span>Pick attack area</span>
      </div>
      <div className={styles["battle__main-items"]}>
        {areas.map((area: any, index: number) => (
          <button className={styles["battle__main-item"]}>
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
