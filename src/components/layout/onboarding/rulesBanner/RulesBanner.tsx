import React, { FC } from "react";
import banner from "../../../../assets/layout/rules/rules-banner.svg";
import styles from "./banner.module.scss";

type RulesBannerProps = {};

const RulesBanner: FC<RulesBannerProps> = ({}) => {
  return (
    <div className={styles["banner-container"]}>
      <img src={banner} alt="Main Button" className={styles["rules-banner"]} />
    </div>
  );
};

export default RulesBanner;
