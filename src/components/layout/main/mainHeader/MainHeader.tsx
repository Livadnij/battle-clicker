import React, { FC } from "react";
import styles from "./mainHeader.module.scss";
import { ReactComponent as HeaderComponent } from "../../../../assets/layout/main/header-component.svg";

type MainHeaderProps = { username: string };

const MainHeader: FC<MainHeaderProps> = ({ username }) => {
  return (
    <div className={styles["container"]}>
      <HeaderComponent />
      <h2> {username}</h2>
    </div>
  );
};

export default MainHeader;
