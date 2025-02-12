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

type DepositPageType = {};

const DepositOnboardingPage: FC<DepositPageType> = ({}) => {
  const [value, setValue] = useState<string>("");
  const [userPaid, setUserPaid] = useState<boolean>(false);
  const { user } = useUser();
  const { tg } = useTelegram();
  const { goHome } = useNavigation();

  const fightPrice = settings.fightPrice;
  const apiUrl = process.env.REACT_APP_API_URL;

  const createInvoice = async () => {
    const currentValue = value;
    try {
      const response = await axios.post(apiUrl! + "/get-invoice", {
        amount: Number(currentValue),
        description: "Deposit stars to get access to paid fights",
        title: "Buy Fights",
      });

      if (response.data.invoiceLink) {
        // Open the payment link inside Telegram WebApp
        tg.openInvoice(response.data.invoiceLink, (invoiceStatus: any) => {
          if (invoiceStatus === "paid") {
            setTimeout(() => {
              //Updating user balance takes some time on a backend so to prevent user from seen home screen with old balance we need to set timeout.
              setUserPaid(true);
            }, 2000);
          }
        });
        // tg.onEvent("invoiceClosed", (data: any) => {
        //   console.log("tg onEvent (invoiceClosed)", data);
        // });
      }
    } catch (error) {
      console.error("Failed to create invoice:", error);
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
