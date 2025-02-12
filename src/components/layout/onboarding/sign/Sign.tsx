import React, { FC } from "react";
import styles from "./sign.module.scss";
import { ReactComponent as DepositBanner } from "../../../../assets/layout/deposit/banner.svg";
import { ReactComponent as DepositSign } from "../../../../assets/layout/deposit/sign.svg";
import Svg from "components/layout/svg/Svg";

type SignProps = {};

const Sign: FC<SignProps> = ({}) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["sign-container"]}>
        <DepositSign className={styles["sign"]} />
        <div className={styles["sign-body"]}>
          <Svg type="star" />
          <span> To join fight club</span>
        </div>
      </div>
      <div className={styles["banner-container"]}>
        <DepositBanner className={styles["banner"]} />
        <span>deposit 100 stars</span>
      </div>
    </div>
  );
};

export default Sign;
