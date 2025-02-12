import Layout from "components/layout/Layout";
import React, { FC } from "react";
import backgroundImage from "../assets/layout/loading/background.png";
import HeaderOnboarding from "components/layout/onboarding/header/HeaderOnboarding";
import styles from "../styles/loading.module.scss";

type FightLoadingProps = {};

const LoadingPage: FC<FightLoadingProps> = ({}) => {
  return (
    <Layout backgroundImage={backgroundImage}>
      <div className={styles["container"]}>
        <div className={styles["header-container"]}>
          <HeaderOnboarding />
        </div>
      </div>
    </Layout>
  );
};

export default LoadingPage;
