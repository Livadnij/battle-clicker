import React, { FC, useState } from "react";
import Layout from "components/layout/Layout";
import { useUser } from "context/UserContext";
import settings from "../settings/settings.json";
import styles from "../styles/deposit.module.scss";
import { useTelegram } from "hooks/useTelegram";
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
          <div>
            <WinnersBanner className={styles["deposit-body__banner"]} />
          </div>
          <div className={styles["deposit-body__events"]}>
            <FightEvents quantity={5} />
          </div>
          <div className={styles["sing-container"]}>
            <Sign className={styles["sing-container__sign"]} />
            <span className={styles["sing-container__title"]}>
              Deposit {fightPrice} Stars
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DepositOnboardingPage;
