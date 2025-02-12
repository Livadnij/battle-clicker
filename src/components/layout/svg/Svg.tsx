import React, { FC } from "react";
import { ReactComponent as StarSVG } from "../../../assets/layout/star.svg";
import { ReactComponent as SkullSVG } from "../../../assets/layout/skull.svg";
import { ReactComponent as CardSVG } from "../../../assets/layout/card.svg";
import styles from "./svg.module.scss";

type StarProps = {
  type?: "star" | "skull" | "card";
};

const Svg: FC<StarProps> = ({ type = "star" }) => {
  return (
    <div className={styles["star-container"]}>
      {type === "star" ? (
        <>
          <StarSVG className={styles["star-bottom"]} />
          <StarSVG className={styles["star-top"]} />
        </>
      ) : type === "skull" ? (
        <>
          <SkullSVG className={styles["skull-bottom"]} />
          <SkullSVG className={styles["skull-top"]} />
        </>
      ) : type === "card" ? (
        <>
          <CardSVG className={styles["card-bottom"]} />
          <CardSVG className={styles["card-top"]} />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Svg;
