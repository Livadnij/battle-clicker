import Layout from "components/layout/Layout";
import { useTelegram } from "hooks/useTelegram";
import React, { useState } from "react";

import styles from "../styles/welcome.module.scss";
import { getUserById } from "../firebase/firebaseFirestore";
import { useNavigate } from "react-router-dom";
import { useUser } from "hooks/UserContext";

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const [loading, setLoading] = useState<boolean>(false);
  const { tg_user } = useTelegram();

  const fetchUser = async () => {
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
      console.log("redirect to home");
      console.log(fetchedUser);
      setUser(fetchedUser);
      navigate("/home");
    } else {
      console.log("redirect to register");
      navigate("/register");
    }
  };

  const alreadyLogined = useUser();

  if (alreadyLogined.user) {
    console.log(alreadyLogined);
    console.log("redirect to home");
    navigate("/home");
  }

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
