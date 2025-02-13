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
import Sign from "components/layout/onboarding/sign/Sign";
import { handleInvoice } from "helpers/handleInvoice";

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
    console.log(apiUrl && fightPrice, apiUrl, fightPrice);
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
        <Sign />
      </div>
    </Layout>
  );
};

export default DepositOnboardingPage;
