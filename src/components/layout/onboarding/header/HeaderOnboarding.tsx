import React, { FC } from "react";
import styles from "./header.module.scss";
import headerComponent1 from "../../../../assets/layout/rules/header-component-1.svg";
import left from "../../../../assets/layout/rules/left.svg";
import right from "../../../../assets/layout/rules/right.svg";
import middle from "../../../../assets/layout/rules/middle.svg";
import Logo from "components/layout/logo/Logo";

type headerProps = {
  pageName: "rules" | "register" | "depositOn";
};

const HeaderOnboarding: FC<headerProps> = ({ pageName }) => {
  return (
    <div className={styles["header-container"]}>
      {/* <img src={union} className={styles["union"]} /> */}
      <div className={styles["union-container"]}>
        <img
          src={left}
          className={
            styles[`${pageName === "rules" ? "left-selected" : "left"}`]
          }
        />
        <img
          src={middle}
          className={
            styles[`${pageName === "register" ? "middle-selected" : "middle"}`]
          }
        />
        <img
          src={right}
          className={
            styles[`${pageName === "depositOn" ? "right-selected" : "right"}`]
          }
        />
      </div>
      <img src={headerComponent1} className={styles["header-component-1"]} />
      <div className={styles["logo-container"]}>
        <Logo />
      </div>
    </div>
  );
};

export default HeaderOnboarding;
