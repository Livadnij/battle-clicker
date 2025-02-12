import React, { FC } from "react";
import styles from "./header.module.scss";
import { ReactComponent as HeaderComponent } from "../../../../assets/layout/rules/header-component-1.svg";
import { ReactComponent as Left } from "../../../../assets/layout/rules/left.svg";
import { ReactComponent as Right } from "../../../../assets/layout/rules/right.svg";
import { ReactComponent as Middle } from "../../../../assets/layout/rules/middle.svg";
import Logo from "components/layout/logo/Logo";

type headerProps = {
  pageName?: "rules" | "depositOn" | "register";
};

const HeaderOnboarding: FC<headerProps> = ({ pageName = "" }) => {
  return (
    <div className={styles["header-container"]}>
      <div className={styles["union-container"]}>
        {pageName ? (
          <>
            <Left
              className={
                styles[`${pageName === "rules" ? "left-selected" : "left"}`]
              }
            />
            <Middle
              className={
                styles[
                  `${pageName === "depositOn" ? "middle-selected" : "middle"}`
                ]
              }
            />
            <Right
              className={
                styles[
                  `${pageName === "register" ? "right-selected" : "right"}`
                ]
              }
            />
          </>
        ) : (
          ""
        )}
      </div>
      <HeaderComponent className={styles["header-component-1"]} />
      <div className={styles["logo-container"]}>
        <Logo />
      </div>
    </div>
  );
};

export default HeaderOnboarding;
