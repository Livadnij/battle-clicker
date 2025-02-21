import Layout from "components/layout/Layout";
import HeaderOnboarding from "components/layout/onboarding/header/HeaderOnboarding";
import React, { FC } from "react";
import backgroundImage from "../assets/layout/results/defeat-backgound.png";

type MaintenanceProps = {};

const MaintenancePage: FC<MaintenanceProps> = () => {
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
