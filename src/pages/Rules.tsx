import Layout from "components/layout/Layout";
import React, { FC } from "react";
import backgroundImage from "../assets/layout/rules/background.png";
import HeaderOnboarding from "components/layout/onboarding/header/HeaderOnboarding";
import { ReactComponent as RulesBanner } from "../assets/layout/rules/rules-banner.svg";
import { ReactComponent as Crosses } from "../assets/layout/rules/cross.svg";
import styles from "../styles/rules.module.scss";
import { ReactComponent as RuleOne } from "../assets/layout/rules/rule-one.svg";
import { ReactComponent as RuleTwo } from "../assets/layout/rules/rule-two.svg";
import { ReactComponent as RuleThree } from "../assets/layout/rules/rule-three.svg";
import { useNavigation } from "../hooks/useNavigation";

type RulesProps = {};

const RulesPage: FC<RulesProps> = () => {
  const { goDeposit } = useNavigation();

  return (
    <Layout
      color="blue"
      buttonTitle="I`m in"
      onClick={goDeposit}
      backgroundImage={backgroundImage}
    >
      <div className={styles["container"]}>
        <div className={styles["header-container"]}>
          <HeaderOnboarding pageName="rules" />
        </div>
        <div className={styles["body"]}>
          <RulesBanner className={styles["body__banner"]} />
          <div className={styles["rules-container"]}>
            <div className={styles["rules-container__rule"]}>
              <RuleOne />
              <div>
                <p>Deposit 100 Stars to enter theN fight arena.</p>
              </div>
            </div>
            <Crosses />
            <div className={styles["rules-container__rule"]}>
              <RuleTwo />
              <div>
                <p>Face real opponents in intense battles.</p>
              </div>
            </div>
            <Crosses />
            <div className={styles["rules-container__rule"]}>
              <RuleThree />
              <div>
                <p>Crush your rival. Take their cash.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RulesPage;
