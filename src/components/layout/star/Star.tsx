import React, { FC } from "react";
import { ReactComponent as StarSVG } from "../../../assets/layout/star.svg";
import styles from "./star.module.scss";

type StarProps = {};

const Star: FC<StarProps> = ({}) => {
  return (
    <div className={styles["star-container"]}>
      <StarSVG className={styles["star-bottom"]} />
      <StarSVG className={styles["star-top"]} />
    </div>
  );
};

export default Star;
