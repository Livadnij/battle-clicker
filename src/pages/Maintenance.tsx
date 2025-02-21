import Layout from "components/layout/Layout";
import HeaderOnboarding from "components/layout/onboarding/header/HeaderOnboarding";
import React, { FC, useEffect } from "react";
import backgroundImage from "../assets/layout/results/defeat-backgound.png";
import { useTelegram } from "hooks/useTelegram";

type MaintenanceProps = {};

const MaintenancePage: FC<MaintenanceProps> = () => {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
    tg.expand();
  }, []);

  return (
    <Layout backgroundImage={backgroundImage}>
      <HeaderOnboarding />
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>maintenance</h1>
      </div>
    </Layout>
  );
};

export default MaintenancePage;
