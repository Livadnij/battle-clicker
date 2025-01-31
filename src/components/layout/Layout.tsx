import React, { ReactNode, useEffect } from "react";
import styles from "../../styles/components/layout/layout.module.scss";
import { useTelegram } from "hooks/useTelegram";
import layoutElementOne from "../../assets/layout/Vector2841.svg";
import layoutElementTwo from "../../assets/layout/Vector2843.svg";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
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
      <div>{children}</div>
    </div>
  );
};

export default Layout;
