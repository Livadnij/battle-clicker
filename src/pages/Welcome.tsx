import Layout from "components/layout/Layout";
import { useTelegram } from "hooks/useTelegram";
import React, { useEffect, useState } from "react";

import styles from "../styles/welcome.module.scss";
import {
  addUser,
  getUserById,
  updateField,
} from "../firebase/firebaseFirestore";
import backgroundImage from "../assets/layout/start/background.png";

import { useUser } from "context/UserContext";
import { useNavigation } from "hooks/useNavigation";
import { randomizer } from "utils/Randomizer";
import { trackEvent } from "utils/analytics";
import { showConsoleArt } from "utils/ConsoleArt";

const WelcomePage: React.FC = () => {
  const { tg, tg_user } = useTelegram();
  const { goHome, goRegister, goRules, goDeposit } = useNavigation();
  const { user, setUser } = useUser();

  const [loading, setLoading] = useState<boolean>(false);

  const fetchUser = async () => {
    if (!tg_user) return;
    setLoading(true);
    const fetchedUser = await getUserById("users", tg_user.id.toString());

    if (fetchedUser && fetchedUser.username) {
      // user already registerd => redirect to main
      updateField(
        "users",
        fetchedUser.id,
        "session_quantity",
        fetchedUser.session_quantity + 1
      );

      trackEvent.APP_LAUNCH({
        session_quantity: fetchedUser.session_quantity + 1,
        deposit_quantity: fetchedUser.deposit_quantity,
        deposit_sum: fetchedUser.deposit_sum,
        isPremium: tg_user.is_premium!,
        userId: fetchedUser.id,
        fights_quantity: fetchedUser.fights_quantity,
        balance: fetchedUser.balance,
        fights_won: fetchedUser.fights_won,
      });
      setUser(fetchedUser);
      setLoading(false);
      goHome();
    } else if (
      fetchedUser &&
      !fetchedUser.username &&
      fetchedUser.balance === 0
    ) {
      // user already registered but didnt pass deposit stage of onboarding => redirect to deposit
      updateField(
        "users",
        fetchedUser.id,
        "session_quantity",
        fetchedUser.session_quantity + 1
      );

      trackEvent.APP_LAUNCH({
        session_quantity: fetchedUser.session_quantity + 1,
        deposit_quantity: fetchedUser.deposit_quantity,
        deposit_sum: fetchedUser.deposit_sum,
        isPremium: tg_user.is_premium!,
        userId: fetchedUser.id,
        fights_quantity: fetchedUser.fights_quantity,
        balance: fetchedUser.balance,
        fights_won: fetchedUser.fights_won,
      });
      setUser(fetchedUser);
      setLoading(false);
      goDeposit();
    } else if (
      fetchedUser &&
      !fetchedUser.username &&
      fetchedUser.balance !== 0
    ) {
      // user already registered but passed deposit stage of onboarding but not register stage  => redirect to register
      updateField(
        "users",
        fetchedUser.id,
        "session_quantity",
        fetchedUser.session_quantity + 1
      );

      trackEvent.APP_LAUNCH({
        session_quantity: fetchedUser.session_quantity + 1,
        deposit_quantity: fetchedUser.deposit_quantity,
        deposit_sum: fetchedUser.deposit_sum,
        isPremium: tg_user.is_premium!,
        userId: fetchedUser.id,
        fights_quantity: fetchedUser.fights_quantity,
        balance: fetchedUser.balance,
        fights_won: fetchedUser.fights_won,
      });
      setUser(fetchedUser);
      setLoading(false);
      goRegister();
    } else {
      // user isn't registered => create user and redirect to rules
      const user = {
        id: tg_user.id.toString(),
        balance: 0,
        username: "",
        avatar: randomizer(0, 3),
        fights_quantity: 0,
        fights_won: 0,
        fights_lost: 0,
        session_quantity: 1,
        deposit_quantity: 0,
        deposit_sum: 0,
      };

      trackEvent.APP_LAUNCH({
        session_quantity: user.session_quantity,
        deposit_quantity: user.deposit_quantity,
        deposit_sum: user.deposit_sum,
        isPremium: tg_user.is_premium!,
        userId: user.id,
        fights_quantity: user.fights_quantity,
        balance: user.balance,
        fights_won: user.fights_won,
      });

      await addUser("users", user, user.id);
      setUser(user);
      setLoading(false);
      goRules();
    }
  };

  useEffect(() => {
    tg.expand();
    tg.ready();
  }, []);

  showConsoleArt();

  return (
    <Layout
      buttonTitle={loading ? "LOADING" : "join now"}
      onClick={fetchUser}
      backgroundImage={backgroundImage}
    >
      <div className={styles["bottom-text-container"]}>
        welcome to the underground...
      </div>
    </Layout>
  );
};

export default WelcomePage;
