import React, { FC } from "react";
import styles from "./balance.module.scss";
import { ReactComponent as Banner } from "../../../../assets/layout/main/balance/banner.svg";
import settings from "../../../../settings/settings.json";
import { ReactComponent as ButtonImage } from "../../../../assets/buttons/invoice-button.svg";
import { handleInvoice } from "helpers/handleInvoice";
import { useTelegram } from "hooks/useTelegram";
import { useUser } from "context/UserContext";
import { trackEvent } from "utils/analytics";

type BalanceProps = {
  title: string;
  value: number;
};

const Balance: FC<BalanceProps> = ({ title = "add extra stars", value }) => {
  const { tg } = useTelegram();
  const { user, setUser } = useUser();
  const fightPrice = settings.fightPrice;
  const apiUrl = process.env.REACT_APP_API_URL;
  console.log(process.env.REACT_APP_MAINTENANCE_MODE);
  const notEnoughForFight = fightPrice > value;

  const handleInvoicePaid = () => {
    if (!user) return;
    trackEvent.DEPOSIT_SUCCESS({ purchase_amount: fightPrice });
    setUser({ ...user!, balance: user.balance + fightPrice });
  };

  const createInvoice = () => {
    trackEvent.DEPOSIT_START({ screen: "main" });
    if (apiUrl && fightPrice && tg) {
      handleInvoice({
        tg,
        apiUrl,
        amount: fightPrice,
        handleCallback: handleInvoicePaid,
      });
    }
  };

  return (
    <div className={styles["container"]}>
      <Banner className={styles["container__banner"]} />
      <div className={styles["container-balance"]}>
        <span>{value}</span>
        {notEnoughForFight ? (
          <span className={styles["container-balance__add"]}>
            {" "}
            + {settings.fightPrice - value} min stars
          </span>
        ) : (
          <></>
        )}
      </div>
      <button onClick={createInvoice} className={styles["invoice-button"]}>
        <ButtonImage className={styles["invoice-button__svg-image"]} />
        <span className={styles["invoice-button__title-shadow"]}>{title}</span>
        <span className={styles["invoice-button__title"]}>{title}</span>
      </button>
      <span
        className={
          styles[
            notEnoughForFight ? "container__not-enough" : "container__enough"
          ]
        }
      >
        it is {notEnoughForFight ? "not" : ""} enough to start fight
      </span>
    </div>
  );
};

export default Balance;
