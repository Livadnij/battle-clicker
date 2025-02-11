import React, { ReactNode, useEffect } from "react";
import styles from "../../styles/components/layout/layout.module.scss";
import MainButton from "components/mainButton/MainButton";

interface LayoutProps {
  children: ReactNode;
  backgroundImage?: string;
  buttonTitle: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
}

const Layout: React.FC<LayoutProps> = ({
  children,
  backgroundImage = "",
  buttonTitle,
  onClick,
  type,
}) => {
  return (
    <div
      className={styles["layout"]}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles["children"]}>{children}</div>
      <MainButton onClick={onClick}>{buttonTitle}</MainButton>
    </div>
  );
};

export default Layout;
