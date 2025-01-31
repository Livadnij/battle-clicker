import React, { FC } from "react";

import styles from "./MainButton.module.scss";
import buttonImage from "../../assets/buttons/MainButton.svg";
import { MainButtonType } from "types/types";

const MainButton: FC<MainButtonType> = ({
  children,
  onClick,
  type,
  ...rest
}) => {
  return (
    <button
      className={styles["main-button"]}
      onClick={onClick}
      type={type}
      {...rest}
    >
      <img
        src={buttonImage}
        alt="Main Button"
        className={styles["button-image"]}
      />
      {children && <span className={styles["button-text"]}>{children}</span>}
    </button>
  );
};

export default MainButton;
