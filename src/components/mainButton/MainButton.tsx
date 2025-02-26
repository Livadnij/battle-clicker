import React, { FC } from "react";

import styles from "./MainButton.module.scss";

import buttonImage from "../../assets/buttons/mainCTA_new.svg";
import glitchEffect from "../../assets/buttons/glitch-effect.svg";
import topBorder from "../../assets/buttons/top-container-border.svg";
import { ReactComponent as TopContainerBorder } from "../../assets/buttons/top-container-border.svg";
import { ReactComponent as GlitchEffect } from "../../assets/buttons/glitch-effect.svg";
import { ReactComponent as ButtonImage } from "../../assets/buttons/mainCTA_new.svg";

type MainButtonType = {
  children?: React.ReactNode;
  onClick?: () => void;
};

const MainButton: FC<MainButtonType> = ({ children, onClick }) => {
  return (
    <div className={styles["button-container"]}>
      <img className={styles["button-container__top-border"]} src={topBorder} />
      {/* <TopContainerBorder className={styles["button-container__top-border"]} /> */}
      <button className={styles["main-button"]} onClick={onClick}>
        {/* <GlitchEffect className={styles["main-button__glitch"]} /> */}
        <img className={styles["main-button__glitch"]} src={glitchEffect} />
        <img className={styles["main-button__image"]} src={buttonImage} />
        {/* <ButtonImage className={styles["main-button__image"]} /> */}
        {children && <p className={styles["main-button__text"]}>{children}</p>}
      </button>
    </div>
  );
};

export default MainButton;
