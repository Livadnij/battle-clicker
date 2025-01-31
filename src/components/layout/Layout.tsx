import React, { ReactNode, useEffect } from "react";
import styles from "../../styles/components/layout/layout.module.scss";
import layoutElementOne from "../../assets/layout/Vector2841.svg";
import layoutElementTwo from "../../assets/layout/Vector2843.svg";
import MainButton from "components/mainButton/MainButton";

interface LayoutProps {
  children: ReactNode;
  buttonTitle: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
}

const Layout: React.FC<LayoutProps> = ({
  children,
  buttonTitle,
  onClick,
  type,
}) => {
  return (
    <div className={styles["layout"]}>
      <img
        src={layoutElementOne}
        alt="Layout Element"
        className={styles["layout-element-one"]}
      />
      <img
        src={layoutElementTwo}
        alt="Layout Element"
        className={styles["layout-element-two"]}
      />
      <div className={styles["children"]}>{children}</div>
      <MainButton onClick={onClick}>{buttonTitle}</MainButton>
    </div>
  );
};

export default Layout;
