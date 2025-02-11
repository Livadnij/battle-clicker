import React, { FC } from "react";

import styles from "./MainButton.module.scss";
import buttonImage from "../../assets/buttons/mainCTA.svg";
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
      {children && <p className={styles["button-text"]}>{children}</p>}
    </button>
  );
};

export default MainButton;
