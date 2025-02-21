import Layout from "components/layout/Layout";
import HeaderOnboarding from "components/layout/onboarding/header/HeaderOnboarding";
import { useNavigation } from "hooks/useNavigation";
import React, { FC } from "react";
import styles from "../styles/results.module.scss";
import { ReactComponent as Sign } from "../assets/layout/results/sign.svg";
import background from "../assets/layout/results/defeat-backgound.png";
import settings from "../settings/settings.json";
import { useUser } from "context/UserContext";
import { ReactComponent as DividerLine } from "../assets/layout/rules/header-component-1.svg";

type DefeatProps = {};

const DefeatPage: FC<DefeatProps> = () => {
  const { user } = useUser();
  const fightPrice = settings.fightPrice;

  //

  const { goHome } = useNavigation();
  return (
    <Layout backgroundImage={background} buttonTitle="Home" onClick={goHome}>
      <div className={styles["container"]}>
        <HeaderOnboarding />
        <div className={styles["body"]}>
          <div className={styles["sign-container"]}>
            <Sign className={styles["sign-container__sign"]} />
            <div className={styles["title-container"]}>
              <span>You Lost!</span>
            </div>
            <div className={styles["text-container"]}>
              <div className={styles["text-container__first-row"]}>
                <span>-{fightPrice}</span>
                <span>stars</span>
              </div>
              <div className={styles["text-container__second-row"]}>
                <span>your balance</span>
                <DividerLine />
                <span>{user ? user.balance : 69}</span>
              </div>
            </div>
            <div className={styles["sign-container__blur"]} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DefeatPage;
