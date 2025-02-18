import React, { FC, useState } from "react";
import Layout from "components/layout/Layout";
import { useUser } from "context/UserContext";
import settings from "../settings/settings.json";
import TextInputField from "components/textInput/TextInputField";
import styles from "../styles/deposit.module.scss";
import { useTelegram } from "hooks/useTelegram";
import axios from "axios";
import backgroundImage from "../assets/layout/deposit/background.png";

import { useNavigation } from "hooks/useNavigation";
import HeaderOnboarding from "components/layout/onboarding/header/HeaderOnboarding";
import { handleInvoice } from "helpers/handleInvoice";
import FightEvents from "components/layout/main/fightEvents/FightEvents";
import { ReactComponent as WinnersBanner } from "../assets/layout/deposit/last-winners-banner.svg";
import { ReactComponent as Sign } from "../assets/layout/deposit/sign-new.svg";

type DepositPageType = {};

const DepositOnboardingPage: FC<DepositPageType> = ({}) => {
  const { user, setUser } = useUser();
  const { tg } = useTelegram();
  const { goRegister } = useNavigation();

  const fightPrice = settings.fightPrice;
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleInvoicePaid = () => {
    setUser({ ...user!, balance: fightPrice });
    goRegister();
  };

  const createInvoice = () => {
    if (apiUrl && fightPrice) {
      handleInvoice({
        tg,
        apiUrl,
        amount: fightPrice,
        handleCallback: handleInvoicePaid,
      });
    }
  };

  return (
    <Layout
      backgroundImage={backgroundImage}
      buttonTitle={"Deposit"}
      onClick={createInvoice}
    >
      <div className={styles["deposit-container"]}>
        <HeaderOnboarding pageName="depositOn" />
        <div className={styles["deposit-body"]}>
          <WinnersBanner className={styles["deposit-body__banner"]} />
          <FightEvents />
          <Sign className={styles["deposit-body__sign"]} />
        </div>
      </div>
    </Layout>
  );
};

export default DepositOnboardingPage;
