import React, { useEffect, useMemo, useState } from "react";

import { useUser } from "context/UserContext";
import { useNavigation } from "hooks/useNavigation";

import Layout from "components/layout/Layout";
import styles from "../styles/home.module.scss";
import settings from "../settings/settings.json";
import { getUserById } from "../firebase/firebaseFirestore";
import MainHeader from "components/main/MainHeader";
import background from "../assets/layout/main/background.png";
import cyberManFirst from "../assets/layout/main/char-1.png";
import cyberManSecond from "../assets/layout/main/char-2.png";
import cyberManThird from "../assets/layout/main/char-3.png";
import cyberManFourth from "../assets/layout/main/char-4.png";

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
  const { goIndex, goFight, goDeposit } = useNavigation();
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
      return "start fight";
    }
    return "Loading...";
  }, [loading, enoughForFight]);

  useEffect(() => {
    fetchUser();
  }, []);

  const variantData = cyberManArray[user ? user.avatar : 2];

  return (
    <Layout
      backgroundImage={background}
      buttonTitle={buttonTitle}
      onClick={handleClick}
    >
      <div className={styles["home-container"]}>
        <MainHeader username={user ? user.username : "John_Do89"} />
        <img
          style={
            (user && user.avatar === 2) || true
              ? { top: "-15%" }
              : { top: "-20%" }
          }
          src={variantData.avatar}
          className={styles["home-container__avatar"]}
        />
      </div>
    </Layout>
  );
};

export default HomePage;
