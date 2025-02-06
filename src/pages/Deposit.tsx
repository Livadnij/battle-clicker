import React, { FC, useState } from "react";
import Layout from "components/layout/Layout";
import { useUser } from "hooks/UserContext";
import settings from "../settings/settings.json";
import TextInputField from "components/textInput/TextInputField";
import styles from "../styles/deposit.module.scss";
import { useTelegram } from "hooks/useTelegram";
import axios from "axios";

type DepositPageType = {};

const DepositPage: FC<DepositPageType> = ({}) => {
  const [value, setValue] = useState<string>("");
  const { user } = useUser();
  const { tg } = useTelegram();

  const fightPrice = settings.fightPrice;

  const createInvoice = async () => {
    try {
      const response = await axios.post("http://localhost:3001/get-invoice", {
        amount: value,
        description: "Deposit stars to get access to paid fights",
        title: "Buy Fights",
      });

      if (response.data.invoiceLink) {
        // Open Telegram Payment Modal
        tg.showPopup(
          {
            title: "Confirm Your Purchase",
            message: `Do you want to buy Fight Club fight pass?`,
            buttons: [
              {
                id: "pay",
                text: `CONFIRM AND PAY ⭐ ${value}`,
                type: "default",
              },
              { id: "cancel", text: "Cancel", type: "destructive" },
            ],
          },
          (buttonId: string) => {
            if (buttonId === "pay") {
              // Open the payment link inside Telegram WebApp
              tg.openInvoice(response.data.invoiceLink, (status: any) => {
                console.log("status:", status);
              });
            }
          }
        );
      }
    } catch (error) {
      console.error("Failed to create invoice:", error);
    }
  };

  return (
    <Layout buttonTitle="Deposit" onClick={createInvoice}>
      <div className={styles["deposit-container"]}>
        <h2>{`Balance : ${user?.balance} stars`}</h2>
        <h3>{`To enter fight you need ${fightPrice} stars`}</h3>
        <TextInputField
          placeholder="..."
          value={value}
          setValue={setValue}
          limitations={[0, 10]}
        />
      </div>
    </Layout>
  );
};

export default DepositPage;
