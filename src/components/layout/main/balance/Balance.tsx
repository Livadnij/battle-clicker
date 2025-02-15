import React, { FC } from "react";
import styles from "./balance.module.scss";

type BalanceProps = {
  title: string;
  value: number;
};

const Balance: FC<BalanceProps> = ({ title, value }) => {
  return <div className={styles["container"]}>Balance</div>;
};

export default Balance;
