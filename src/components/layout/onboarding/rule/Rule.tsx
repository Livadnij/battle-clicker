import React, { FC } from "react";
import styles from "./rule.module.scss";
import Star from "components/layout/star/Star";
import { ReactComponent as LeftElement } from "../../../../assets/layout/rules/rule-left-element.svg";
import { ReactComponent as Rectangle } from "../../../../assets/layout/rules/Rectangle.svg";

type RuleProps = {
  number: 1 | 2 | 3;
  text: string;
};

const Rule: FC<RuleProps> = ({ number, text }) => {
  return (
    <div className={styles["rule-container"]}>
      <LeftElement className={styles["left-element"]} />
      <div className={styles["star-container"]}>
        <Star />
      </div>
      <div className={styles["rectangle-comtainer"]}>
        <Rectangle />
        <span> Rule #{number}</span>
      </div>
      <div className={styles["text-comtainer"]}>{text}</div>
    </div>
  );
};

export default Rule;
