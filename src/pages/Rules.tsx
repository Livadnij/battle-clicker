import Layout from "components/layout/Layout";
import React, { FC } from "react";
import backgroundImage from "../assets/layout/rules/background.png";
import HeaderOnboarding from "components/layout/onboarding/header/HeaderOnboarding";
import RulesBanner from "components/layout/onboarding/rulesBanner/RulesBanner";
import styles from "../styles/rules.module.scss";
import Rule from "components/layout/onboarding/rule/Rule";
import { useNavigation } from "../hooks/useNavigation";
import Crosses from "components/layout/onboarding/crosses/Crosses";

type RulesProps = {};

const RulesPage: FC<RulesProps> = ({}) => {
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
        <RulesBanner />
        {/* <div className={styles["body"]}>
          <div className={styles["rules-comtainer"]}> */}
        <Rule
          type="star"
          number={1}
          text="Deposit 100 Stars to enter theN fight arena."
        />
        <Crosses />
        <Rule
          type="skull"
          number={2}
          text="Face real opponents in intense battles."
        />
        <Crosses />
        <Rule
          type="card"
          number={3}
          text="Crush your rival. Take their cash."
        />
        {/* </div>
        </div> */}
      </div>
    </Layout>
  );
};

export default RulesPage;
