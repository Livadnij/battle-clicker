import React, { FC } from "react";
import styles from "./rule.module.scss";
import { ReactComponent as LeftElement } from "../../../../assets/layout/rules/rule-left-element.svg";
import { ReactComponent as RightElement } from "../../../../assets/layout/rules/rule-right-element.svg";
import { ReactComponent as Rectangle } from "../../../../assets/layout/rules/Rectangle.svg";
import Svg from "../../svg/Svg";

type RuleProps = {
  number: 1 | 2 | 3;
  text: string;
  type?: "star" | "skull" | "card";
};

const Rule: FC<RuleProps> = ({ number, text, type = "star" }) => {
  return (
    <div className={styles["rule-container"]}>
      <LeftElement className={styles["left-element"]} />
      <div className={styles["star-container"]}>
        <Svg type={type} />
      </div>
      <div className={styles["body"]}>
        <div className={styles["text-comtainer"]}>{text}</div>
        <RightElement className={styles["right-element"]} />
      </div>
      <div className={styles["rectangle-comtainer"]}>
        <Rectangle />
        <span> Rule #{number}</span>
      </div>
    </div>
  );
};

export default Rule;
