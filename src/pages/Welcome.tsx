import Layout from "components/layout/Layout";
import { useTelegram } from "hooks/useTelegram";
import React, { useEffect, useState } from "react";

import styles from "../styles/welcome.module.scss";
import { getUserById } from "../firebase/firebaseFirestore";
import backgroundImage from "../assets/layout/start/background.png";

import { useUser } from "context/UserContext";
import { useNavigation } from "hooks/useNavigation";

const WelcomePage: React.FC = () => {
  const { tg, tg_user } = useTelegram();
  const { goHome, goRegister, goRules } = useNavigation();
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
    <Layout
      buttonTitle={loading ? "LOADING" : "join now"}
      onClick={goRules}
      backgroundImage={backgroundImage}
    >
      <div className={styles["bottom-text-container"]}>
        welcome to the underground...
      </div>
    </Layout>
  );
};

export default WelcomePage;
