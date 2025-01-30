import React, { ReactNode, useEffect } from "react";
import "../../styles/components/layout/layout.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    const userTheme = window.Telegram?.WebApp?.colorScheme;
    document.body.classList.toggle("dark-theme", userTheme === "dark");
  }, []);
  return <div className="layout">{children}</div>;
};

export default Layout;
