import Layout from "components/layout/Layout";
import React, { FC } from "react";
import backgroundImage from "../assets/layout/rules/background.png";
import HeaderOnboarding from "components/layout/onboarding/header/HeaderOnboarding";
import RulesBanner from "components/layout/onboarding/rulesBanner/RulesBanner";
import styles from "../styles/rules.module.scss";
import Rule from "components/layout/onboarding/rule/Rule";
import { useNavigation } from "../hooks/useNavigation";

type RulesProps = {};

const RulesPage: FC<RulesProps> = ({}) => {
  const { goHome } = useNavigation();
  const handleNextPage = () => {};

  return (
    <Layout
      buttonTitle="I`m in"
      onClick={goHome}
      backgroundImage={backgroundImage}
    >
      <HeaderOnboarding pageName="rules" />
      <RulesBanner />
      <div className={styles["rules-comtainer"]}>
        <Rule number={1} text="Deposit 100 Stars to enter theN fight arena." />
      </div>
    </Layout>
  );
};

export default RulesPage;
