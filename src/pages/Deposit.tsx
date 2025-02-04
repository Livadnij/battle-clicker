import React, { FC, useState } from "react";
import Layout from "components/layout/Layout";
import { useUser } from "hooks/UserContext";
import settings from "../settings/settings.json";
import TextInputField from "components/textInput/TextInputField";
import styles from "../styles/deposit.module.scss";
import { useTelegram } from "hooks/useTelegram";

type DepositPageType = {};

const DepositPage: FC<DepositPageType> = ({}) => {
  const [value, setValue] = useState<string>("");
  const { user } = useUser();
  const { tg } = useTelegram();

  const fightPrice = settings.fightPrice;

  const handleDeposit = () => {
    if (!tg) return;
    if (value.toLowerCase() === "dev") {
      const data = { action: "buy", value: 0 };
      tg.sendData(JSON.stringify(data));
    } else {
      const amount = parseInt(value, 10);
      if (amount <= 0) return alert("Enter a valid amount");

      const data = { action: "buy", value: amount };
      tg.sendData(JSON.stringify(data));
    }
  };

  return (
    <Layout buttonTitle="Deposit" onClick={handleDeposit}>
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
