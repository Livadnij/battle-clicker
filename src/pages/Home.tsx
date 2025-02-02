import React from "react";

import { useUser } from "hooks/UserContext";
import { useNavigation } from "hooks/useNavigation";

import Layout from "components/layout/Layout";
import styles from "../styles/home.module.scss";

const HomePage: React.FC = () => {
  const { goIndex, goFight } = useNavigation();
  const { user } = useUser();
  console.log(user);

  if (!user?.id) {
    goIndex();
  }

  return (
    <Layout
      buttonTitle="start fight"
      onClick={() => {
        goFight();
      }}
    >
      <div className={styles["home-container"]}>
        <h1>{user ? user.username : "John doe 2077"}</h1>
        <h2>{`You joined ${user?.fights_quantity} fights`}</h2>
      </div>
    </Layout>
  );
};

export default HomePage;
