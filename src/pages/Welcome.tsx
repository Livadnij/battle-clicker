import Layout from "components/layout/Layout";
import { useTelegram } from "hooks/useTelegram";
import React, { useEffect, useState } from "react";

import styles from "../styles/welcome.module.scss";
import { addUser, getUserById } from "../firebase/firebaseFirestore";
import backgroundImage from "../assets/layout/start/background.png";

import { useUser } from "context/UserContext";
import { useNavigation } from "hooks/useNavigation";
import { randomizer } from "utils/Randomizer";

const WelcomePage: React.FC = () => {
  const { tg, tg_user } = useTelegram();
  const { goHome, goRegister, goRules, goDeposit } = useNavigation();
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
    if (fetchedUser && fetchedUser.username) {
      // user already registerd => redirect to main
      setUser(fetchedUser);
      goHome();
    } else if (
      fetchedUser &&
      !fetchedUser.username &&
      fetchedUser.balance === 0
    ) {
      // user already registered but didnt pass deposit stage of onboarding => redirect to deposit
      setUser(fetchedUser);
      goDeposit();
    } else if (
      fetchedUser &&
      !fetchedUser.username &&
      fetchedUser.balance !== 0
    ) {
      // user already registered but passed deposit stage of onboarding but not register stage  => redirect to register
      setUser(fetchedUser);
      goRegister();
    } else {
      // user isn't registered => create user and redirect to rules
      const user = {
        id: tg_user.id.toString(),
        balance: 0,
        fights_quantity: 0,
        username: "",
        avatar: randomizer(0, 3),
      };

      await addUser("users", user, user.id);
      setUser(user);
      goRules();
    }
  };

  useEffect(() => {
    tg.ready();
    tg.expand();
  }, []);

  return (
    <Layout
      buttonTitle={loading ? "LOADING" : "join now"}
      onClick={fetchUser}
      backgroundImage={backgroundImage}
    >
      <></>
    </Layout>
  );
};

export default WelcomePage;
