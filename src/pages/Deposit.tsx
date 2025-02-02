import React, { FC, useState } from "react";

import Layout from "components/layout/Layout";
import { useUser } from "hooks/UserContext";
import settings from "../settings/settings.json";
import TextInputField from "components/textInput/TextInputField";
import styles from "../styles/deposit.module.scss";
import { useTelegram } from "hooks/useTelegram";

type DepositPageType = {};

const DepositPage: FC<DepositPageType> = ({}) => {
  const [value, setValue] = useState<string>("0");
  const { user } = useUser();
  const { tg } = useTelegram();

  const fightPrice = settings.fightPrice;

  const handleDeposit = () => {
    if (tg) {
      tg.showPopup(
        {
          title: "Buy Fights",
          message: `Confirm purchase for ${value} Stars?`,
          buttons: [
            { id: "buy", text: "Buy", type: "default" },
            { id: "cancel", text: "Cancel", type: "cancel" },
          ],
        },
        (buttonId: string) => {
          if (buttonId === "buy") {
            tg.openInvoice({ start_param: "buy_fights" });
          }
        }
      );
    }
  };

  return (
    <Layout
      buttonTitle="Deposit"
      onClick={() => {
        handleDeposit();
      }}
    >
      <div className={styles["deposit-container"]}>
        <h2>{`Balance : ${user?.balance} stars`}</h2>
        <h3>{`To enter fight you need ${fightPrice} stars`}</h3>
        <TextInputField
          value={value}
          setValue={setValue}
          limitations={[0, 10]}
        />
      </div>
    </Layout>
  );
};

export default DepositPage;
