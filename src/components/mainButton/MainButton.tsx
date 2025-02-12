import React, { FC } from "react";

import styles from "./MainButton.module.scss";
import { ReactComponent as ButtonImage } from "../../assets/buttons/mainCTA.svg";

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
    <button
      className={styles["main-button"]}
      onClick={onClick}
      type={type}
      {...rest}
    >
      <ButtonImage
        className={
          styles[
            color === "yellow"
              ? "button-image-yellow"
              : color === "blue"
              ? "button-image-blue"
              : ""
          ]
        }
      />
      {children && <p className={styles["button-text"]}>{children}</p>}
    </button>
  );
};

export default MainButton;
