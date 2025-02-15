import React, { FC } from "react";

import styles from "./MainButton.module.scss";
import { ReactComponent as ButtonImage } from "../../assets/buttons/mainCTA_new.svg";
import { ReactComponent as TopContainerBorder } from "../../assets/buttons/top-container-border.svg";
import { ReactComponent as GlitchEffect } from "../../assets/buttons/glitch-effect.svg";

type MainButtonType = {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  color?: "yellow" | "blue";
};

const MainButton: FC<MainButtonType> = ({
  children,
  onClick,
  color = "yellow",
  type,
  ...rest
}) => {
  return (
    <div className={styles["button-container"]}>
      <TopContainerBorder className={styles["button-container__top-border"]} />
      <button
        className={styles["main-button"]}
        onClick={onClick}
        type={type}
        {...rest}
      >
        <GlitchEffect className={styles["main-button__glitch"]} />
        <ButtonImage className={styles["main-button__image"]} />
        {children && <p className={styles["main-button__text"]}>{children}</p>}
      </button>
    </div>
  );
};

export default MainButton;
