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
  enoughForFight: boolean;
  createInvoice: () => void;
  title: string;
  value: number;
};

const Balance: FC<BalanceProps> = ({
  enoughForFight,
  title = "add extra stars",
  value,
  createInvoice,
}) => {
  return (
    <div className={styles["container"]}>
      <Banner className={styles["container__banner"]} />
      <div className={styles["container-balance"]}>
        <span
          className={
            !enoughForFight
              ? styles["container-balance__balance-danger"]
              : styles["container-balance__balance"]
          }
        >
          {value}
        </span>
        {!enoughForFight ? (
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
            !enoughForFight ? "container__not-enough" : "container__enough"
          ]
        }
      >
        it is {!enoughForFight ? "not" : ""} enough to start fight
      </span>
    </div>
  );
};

export default Balance;
