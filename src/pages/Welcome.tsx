import Layout from "components/layout/Layout";
import { useTelegram } from "hooks/useTelegram";
import React, { useEffect, useState } from "react";

import styles from "../styles/welcome.module.scss";
import { getUserById } from "../firebase/firebaseFirestore";

import { useUser } from "hooks/UserContext";
import { useNavigation } from "hooks/useNavigation";

const WelcomePage: React.FC = () => {
  const { tg } = useTelegram();
  const { goHome, goRegister } = useNavigation();
  const { setUser } = useUser();

  const [loading, setLoading] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>("");

  const fetchUser = async () => {
    setLoading(true);
    let fetchedUser;
    try {
      fetchedUser = await getUserById("users", userId!);
    } catch (error) {
      console.log("Failed to fetch user data");
    } finally {
      setLoading(false);
    }
    if (fetchedUser) {
      console.log("redirect to home");
      setUser(fetchedUser);
      goHome();
    } else {
      console.log("redirect to register");
      goRegister();
    }
  };

  useEffect(() => {
    tg.ready();
    tg.expand();

    console.log(tg.initData());

    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("userId");
    console.log(userId);
    if (userId) {
      const parsedData = JSON.parse(decodeURIComponent(userId));
      console.log(parsedData);
      setUserId(parsedData.toString());
      console.log("User Data:", parsedData); // { userId, chatId }
      setUser({ id: userId, balance: 0, fights_quantity: 0, username: "" });
    }
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
