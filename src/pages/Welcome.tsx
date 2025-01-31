import Layout from "components/layout/Layout";
import MainButton from "components/mainButton/MainButton";
import { useTelegram } from "hooks/useTelegram";
import React, { useState } from "react";

import "../styles/welcome.scss";
import { getUserById } from "../firebase/firebaseFirestore";
import { useNavigate } from "react-router-dom";
import { useUser } from "hooks/UserContext";

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useTelegram();

  const fetchUser = async () => {
    setLoading(true);
    let fetchedUser;
    try {
      fetchedUser = await getUserById("users", user.id);
      console.log(fetchedUser);
    } catch (error) {
      console.log("Failed to fetch user data");
    } finally {
      setLoading(false);
    }
    if (fetchedUser) {
      console.log(fetchedUser);
      // setUser(fetchedUser);
      // navigate("/home");
    } else {
      // navigate("/register");
    }
  };

  const handleButtonClick = () => {
    fetchUser();
  };

  return (
    <Layout>
      <div>
        <h1>JOIN FIGHT CLUB</h1>
        <h2>EARN REAL CASH</h2>
        <h2>NO BS</h2>
      </div>
      <MainButton onClick={handleButtonClick}>
        {loading ? "LOADING" : "START"}
      </MainButton>
    </Layout>
  );
};

export default WelcomePage;
