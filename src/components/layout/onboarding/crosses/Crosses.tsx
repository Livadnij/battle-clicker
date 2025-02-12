import React, { FC } from "react";
import { ReactComponent as Cross } from "../../../../assets/layout/rules/cross.svg";
import styles from "./crosses.module.scss";

type CrossesProps = {};

const Crosses: FC<CrossesProps> = ({}) => {
  return (
    <div className={styles["crosses-container"]}>
      <Cross />
      <Cross />
      <Cross />
    </div>
  );
};

export default Crosses;
