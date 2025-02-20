import Layout from "components/layout/Layout";
import React, { FC, useEffect, useState } from "react";
import backgroundImage from "../assets/layout/loading/background.png";
import HeaderOnboarding from "components/layout/onboarding/header/HeaderOnboarding";
import styles from "../styles/loadingFight.module.scss";
import LoadingBar from "components/layout/loadingDar/LoadingBar";

type FightLoadingProps = {};

const LoadingPage: FC<FightLoadingProps> = () => {
  const [progress, setProgress] = useState<number>(0);
  const timeout = 3.0;

  useEffect(() => {
    setTimeout(() => {
      setProgress(100);
    }, 500);
    setTimeout(() => {
      console.log("redirect");
    }, timeout * 1000);
  }, []);

  return (
    <Layout backgroundImage={backgroundImage}>
      <div className={styles["container"]}>
        <div className={styles["header-container"]}>
          <HeaderOnboarding />
        </div>
        <LoadingBar progress={progress} timeout={timeout} />
      </div>
    </Layout>
  );
};

export default LoadingPage;
