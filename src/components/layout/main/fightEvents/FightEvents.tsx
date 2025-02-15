import React, { FC } from "react";
import styles from "./fightEvents.module.scss";

type FightEventsProps = {};

const FightEvents: FC<FightEventsProps> = ({}) => {
  return <div className={styles["events-container"]}>FightEvents</div>;
};

export default FightEvents;
