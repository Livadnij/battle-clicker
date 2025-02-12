import React, { FC } from "react";
import { ReactComponent as Banner } from "../../../../assets/layout/rules/rules-banner.svg";
import styles from "./banner.module.scss";

type RulesBannerProps = {};

const RulesBanner: FC<RulesBannerProps> = ({}) => {
  return (
    <div className={styles["banner-container"]}>
      <Banner className={styles["rules-banner"]} />
    </div>
  );
};

export default RulesBanner;
