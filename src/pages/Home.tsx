import React from "react";

import { useUser } from "hooks/UserContext";
import { useNavigation } from "hooks/useNavigation";

import Layout from "components/layout/Layout";
import styles from "../styles/home.module.scss";
import settings from "../settings/settings.json";

const HomePage: React.FC = () => {
  const { goIndex, goFight } = useNavigation();
  const { user } = useUser();

  const fightPrice = settings.fightPrice;
  const enoughForFight = user?.balance! >= fightPrice;

  if (!user?.id) {
    goIndex();
  }

  return (
    <Layout
      buttonTitle={enoughForFight ? "start fight" : "deposit"}
      onClick={() => {
        goFight();
      }}
    >
      <div className={styles["home-container"]}>
        <h1>{user ? user.username : "John doe 2077"}</h1>
        <h2>{`You joined ${user?.fights_quantity} ${
          user?.fights_quantity === 1 ? "fight" : "fights"
        }`}</h2>
        <h2>{`Balance : ${user?.balance} stars`}</h2>
        <h4>{`You ${
          enoughForFight ? "" : "dont "
        }have enough stars to start a fight ${
          enoughForFight ? "" : "<br/> Please Deposit"
        }`}</h4>
      </div>
    </Layout>
  );
};

export default HomePage;
