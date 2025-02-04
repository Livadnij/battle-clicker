import React, { useEffect, useState } from "react";

import { useUser } from "hooks/UserContext";
import { useNavigation } from "hooks/useNavigation";

import Layout from "components/layout/Layout";
import styles from "../styles/home.module.scss";
import settings from "../settings/settings.json";
import { getUserById } from "../firebase/firebaseFirestore";

const HomePage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { goIndex, goFight, goDeposit } = useNavigation();
  const { user, setUser } = useUser();

  const fightPrice = settings.fightPrice;
  const enoughForFight = user?.balance! >= fightPrice;

  if (!user?.id) {
    goIndex();
  }

  const fetchUser = async () => {
    setLoading(true);
    try {
      const fetchedUser = await getUserById("users", user?.id.toString()!);
      if (fetchedUser) {
        setUser(fetchedUser);
      } else {
        goIndex();
      }
    } catch (error) {
      console.log("Failed to fetch user data");
    } finally {
      setTimeout(() => setLoading(false), 2000);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Layout
      buttonTitle={
        loading ? "Loading..." : enoughForFight ? "start fight" : "deposit"
      }
      onClick={
        loading
          ? () => {}
          : () => {
              enoughForFight ? goFight() : goDeposit();
            }
      }
    >
      <div className={styles["home-container"]}>
        <h1>{user ? user.username : "John doe 2077"}</h1>
        {loading ? (
          <></>
        ) : (
          <>
            <h2>{`You joined ${user?.fights_quantity} ${
              user?.fights_quantity === 1 ? "fight" : "fights"
            }`}</h2>
            <h2>{`Balance : ${user?.balance} stars`}</h2>
            <h4>{`You ${
              enoughForFight ? "" : `dont `
            }have enough stars to start a fight. ${
              enoughForFight ? "" : ` Please Deposit`
            }`}</h4>
          </>
        )}
      </div>
    </Layout>
  );
};

export default HomePage;
