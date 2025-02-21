import React, { useEffect, useMemo, useState } from "react";

import { useUser } from "context/UserContext";
import { useNavigation } from "hooks/useNavigation";

import Layout from "components/layout/Layout";
import styles from "../styles/home.module.scss";
import settings from "../settings/settings.json";
import { getUserById } from "../firebase/firebaseFirestore";
import MainHeader from "components/layout/main/mainHeader/MainHeader";
import background from "../assets/layout/main/background.png";
import cyberManFirst from "../assets/layout/main/char-1.png";
import cyberManSecond from "../assets/layout/main/char-2.png";
import cyberManThird from "../assets/layout/main/char-3.png";
import cyberManFourth from "../assets/layout/main/char-4.png";
import Balance from "components/layout/main/balance/Balance";
import FightEvents from "components/layout/main/fightEvents/FightEvents";
import { trackEvent } from "utils/analytics";
import { e } from "react-router/dist/development/route-data-Cq_b5feC";

const cyberManArray = [
  {
    avatar: cyberManFirst,
  },
  {
    avatar: cyberManSecond,
  },
  {
    avatar: cyberManThird,
  },
  {
    avatar: cyberManFourth,
  },
];

const HomePage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { goIndex, goLoading } = useNavigation();
  const { user, setUser } = useUser();

  const fightPrice = settings.fightPrice;
  const enoughForFight = user?.balance! >= fightPrice;

  // if (!user?.id) {
  //   goIndex();
  // }

  const fetchUser = async () => {
    try {
      const fetchedUser = await getUserById("users", user?.id.toString()!);
      if (fetchedUser) {
        setUser(fetchedUser);
      } else {
        goIndex();
      }
    } catch (error) {
      trackEvent.ERROR({ error: `Failed to fetch user data. ${error}` });
      console.log("Failed to fetch user data");
    } finally {
      setTimeout(() => setLoading(false), 1000);
    }
  };

  const handleClick = () => {
    if (!loading && enoughForFight) {
      trackEvent.FIGHT_START({ fightid: user?.id! });
      goLoading();
    }
  };

  const buttonTitle = useMemo(() => {
    if (!loading) {
      return "start fight";
    }
    return "Loading";
  }, [loading, enoughForFight]);

  useEffect(() => {
    fetchUser();
  }, []);

  trackEvent.MAIN_SCREEN();

  const variantData = cyberManArray[user ? user.avatar : 3];

  return (
    <Layout
      backgroundImage={background}
      buttonTitle={buttonTitle}
      onClick={handleClick}
    >
      <div className={styles["home-container"]}>
        <div className={styles["container"]}>
          <MainHeader username={user ? user.username : "John_Do89"} />
          <div className={styles["body"]}>
            <div className={styles["body__balance"]}>
              <Balance
                title="ADD EXTRA STARS"
                value={user ? user.balance : 50}
              />
            </div>
            <div className={styles["body__events"]}>
              <FightEvents quantity={4} />
            </div>
          </div>
        </div>
        <div className={styles["image-container"]}>
          <img
            alt="user avatar"
            src={variantData.avatar}
            className={styles["image-container__avatar"]}
          />
          <div className={styles["gradient-container"]}>
            <div className={styles["gradient-container__gradient"]} />
            <div className={styles["gradient-container__solid"]} />
            <div className={styles["gradient-container__gradient-blur"]} />
            <div className={styles["gradient-container__solid-blur"]} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
