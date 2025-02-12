import React, { useEffect, useMemo, useState } from "react";

import { useUser } from "context/UserContext";
import { useNavigation } from "hooks/useNavigation";

import Layout from "components/layout/Layout";
import styles from "../styles/home.module.scss";
import settings from "../settings/settings.json";
import { getUserById } from "../firebase/firebaseFirestore";

const HomePage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { goIndex, goFight, goDeposit } = useNavigation();
  const { user, setUser } = useUser();

  const fightPrice = settings.fightPrice;
  const enoughForFight = user?.balance! >= fightPrice;

  if (!user?.id) {
    goIndex();
  }

  const fetchUser = async () => {
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
      setTimeout(() => setLoading(false), 1000);
    }
  };

  const handleClick = () => {
    if (!loading) {
      enoughForFight ? goFight() : goDeposit();
    }
  };

  const buttonTitle = useMemo(() => {
    if (!loading) {
        if (enoughForFight) {
            return "start fight";
        } else {
            return "deposit";
        }
    }
    return "Loading...";
  }, [loading, enoughForFight]);

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Layout
      buttonTitle={buttonTitle}
      onClick={handleClick}
    >
        <div className={styles["home-container"]}>
            <h1>{user?.username ?? "John doe 2077"}</h1>
            {!loading && (
                <>
                    <h2>You joined {user?.fights_quantity} {user?.fights_quantity === 1 ? "fight" : "fights"}</h2>
                    <h2>Balance: {user?.balance} stars</h2>
                    <h4>You {enoughForFight ? "" : "don't "}have enough stars to start a
                        fight. {enoughForFight ? "" : "Please Deposit"}</h4>
                </>
            )}
        </div>
    </Layout>
  );
};

export default HomePage;
