import React, { FC } from "react";
import styles from "./loadingBar.module.scss";
import { ReactComponent as Bar } from "../../../assets/layout/loading/loading-bar.svg";

type LoadingProps = { progress: number; timeout: number };

const LoadingBar: FC<LoadingProps> = ({ progress, timeout }) => {
  return (
    <div className={styles["bar-container"]}>
      <div className={styles["bar-container__blur"]} />
      <Bar className={styles["bar-container__background"]} />
      <div className={styles["bar-container__fill-container"]}>
        <div
          style={{
            width: `${progress}%`,
            transition: `width ${timeout}s ease-in-out`,
          }}
          className={styles["bar-container__fill"]}
        />
      </div>
    </div>
  );
};

export default LoadingBar;
