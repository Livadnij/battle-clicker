import Layout from "components/layout/Layout";
import { useTelegram } from "hooks/useTelegram";
import React, { useEffect, useState } from "react";

import styles from "../styles/welcome.module.scss";
import { getUserById } from "../firebase/firebaseFirestore";

import { useUser } from "context/UserContext";
import { useNavigation } from "hooks/useNavigation";

const WelcomePage: React.FC = () => {
  const { tg, tg_user } = useTelegram();
  const { goHome, goRegister } = useNavigation();
  const { setUser } = useUser();

  const [loading, setLoading] = useState<boolean>(false);

  const fetchUser = async () => {
    if (!tg_user) return;
    setLoading(true);
    let fetchedUser;
    try {
      fetchedUser = await getUserById("users", tg_user.id.toString());
    } catch (error) {
      console.log("Failed to fetch user data");
    } finally {
      setLoading(false);
    }
    if (fetchedUser) {
      setUser(fetchedUser);
      goHome();
    } else {
      setUser({
        id: tg_user.id.toString(),
        balance: 0,
        fights_quantity: 0,
        username: "",
      });
      goRegister();
    }
  };

  useEffect(() => {
    tg.ready();
    tg.expand();
  }, []);

  return (
    <Layout buttonTitle={loading ? "LOADING" : "START"} onClick={fetchUser}>
      <div className={styles["welcome-container"]}>
        <h1>JOIN FIGHT CLUB</h1>
        <h2>EARN REAL CASH</h2>
        <h2>NO BS</h2>
      </div>
    </Layout>
  );
};

export default WelcomePage;
