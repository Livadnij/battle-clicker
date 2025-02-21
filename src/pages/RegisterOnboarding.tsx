import React, { FC, useState } from "react";
import Layout from "components/layout/Layout";
import styles from "../styles/register-onboarding.module.scss";
import backgroundImageFirst from "../assets/layout/register/register-onboarding-1.png";
import backgroundImageSecond from "../assets/layout/register/register-onboarding-2.png";
import backgroundImageThird from "../assets/layout/register/register-onboarding-3.png";
import backgroundImageFourth from "../assets/layout/register/register-onboarding-4.png";
import cyberManFirst from "../assets/layout/register/cyber-man-1.png";
import cyberManSecond from "../assets/layout/register/cyber-man-2.png";
import cyberManThird from "../assets/layout/register/cyber-man-3.png";
import cyberManFourth from "../assets/layout/register/cyber-man-4.png";

import HeaderOnboarding from "components/layout/onboarding/header/HeaderOnboarding";
import CyberInput from "../components/layout/onboarding/cyberInput/CyberInput";
import { randomizer } from "../utils/Randomizer";
import { useTelegram } from "hooks/useTelegram";
import { useUser } from "context/UserContext";
import { useNavigation } from "hooks/useNavigation";
import { updateUser } from "../firebase/firebaseFirestore";
import { trackEvent } from "utils/analytics";

type RegisterPageType = {};

const cyberManArray = [
  {
    avatar: cyberManFirst,
    background: backgroundImageFirst,
  },
  {
    avatar: cyberManSecond,
    background: backgroundImageSecond,
  },
  {
    avatar: cyberManThird,
    background: backgroundImageThird,
  },
  {
    avatar: cyberManFourth,
    background: backgroundImageFourth,
  },
];

const RegisterOnboardingPage: FC<RegisterPageType> = () => {
  const { tg_user } = useTelegram();
  const { user, setUser } = useUser();
  const { goHome } = useNavigation();

  const [value, setValue] = useState<string>(
    tg_user ? tg_user.username : "Enter your name"
  );
  const variant = user ? user.avatar : randomizer(0, 3);
  const variantData = cyberManArray[variant];

  const handleSubmitUser = async () => {
    if (!user) return;
    if (value.length <= 3) return alert("Name is too short");
    if (value.length > 12) return alert("Name is too long");
    try {
      await updateUser(user.id, "users", { ...user, username: value });
    } catch (error) {
      trackEvent.ERROR({ error: `Failed to update username. ${error}` });
      console.log("Failed to fetch user data");
    }
    setUser({ ...user, username: value });
    goHome();
  };

  const getAvatarStyles = () => {
    if (variant === 0) {
      return { top: "100px" };
    } else if (variant === 1) {
      return { top: "100px" };
    } else if (variant === 2) {
      return { top: 0 };
    } else if (variant === 3) {
      return { top: 0 };
    } else {
      return { top: 0 };
    }
  };

  trackEvent.ONBOARDING_SCREEN({ screen: "register" });
  trackEvent.ONBOARDING_FINISHED();

  return (
    <Layout
      backgroundImage={variantData.background}
      buttonTitle={"LET’S FIGHT!"}
      onClick={handleSubmitUser}
    >
      <div className={styles["register-container"]}>
        <HeaderOnboarding pageName="register" />
        <div>
          <CyberInput
            label="Enter your name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <img
            alt="user avatar"
            src={variantData.avatar}
            style={getAvatarStyles()}
            className={styles["register-container__avatar"]}
          />
        </div>
      </div>
    </Layout>
  );
};

export default RegisterOnboardingPage;
