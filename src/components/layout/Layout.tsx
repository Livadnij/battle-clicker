import React, { ReactNode, useEffect } from "react";
import "../../styles/components/layout/layout.scss";
import { useTelegram } from "hooks/useTelegram";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { tg } = useTelegram();

  useEffect(() => {
    const userTheme = tg.colorScheme;
    document.body.classList.toggle("dark-theme", userTheme === "dark");
  }, []);
  return <div className="layout">{children}</div>;
};

export default Layout;
