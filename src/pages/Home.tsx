import Layout from "components/layout/Layout";
import { useUser } from "hooks/UserContext";
import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles/home.module.scss";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  console.log(user);

  if (!user?.id) {
    navigate("/");
  }

  return (
    <Layout
      buttonTitle="start fight"
      onClick={() => {
        navigate("/battle");
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
