import React, { FC } from "react";
import styles from "./loadingBar.module.scss";
import { ReactComponent as Bar } from "../../../assets/layout/loading/loading-bar.svg";

type LoadingProps = { progress: number; timeout: number };

const LoadingBar: FC<LoadingProps> = ({ progress, timeout }) => {
  return (
    <div className={styles["bar-container"]}>
      <Bar className={styles["progress-bar"]} />
      <div
        className={styles["progress-bar-fill"]}
        style={{
          width: `${progress}%`,
          transition: `width ${timeout}s ease-in-out`,
        }}
      />
      <span>looking for a fighter</span>
    </div>
  );
};

export default LoadingBar;
