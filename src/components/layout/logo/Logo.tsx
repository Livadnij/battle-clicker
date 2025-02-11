import React, { FC } from "react";
import styles from "./logo.module.scss";
import logoSmall from "../../../assets/layout/logo-small.svg";
import logoBottom from "../../../assets/layout/logo-bottom.svg";

type logoProps = {};

const Logo: FC<logoProps> = ({}) => {
  return (
    <div className={styles["logo-container"]}>
      <img src={logoSmall} className={styles["logo"]} />
    </div>
  );
};

export default Logo;
