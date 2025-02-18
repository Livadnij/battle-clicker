import React, { FC } from "react";
import styles from "./singleEvent.module.scss";
import { ReactComponent as EventContainerElement } from "../../../../../assets/layout/main/events/event-container.svg";
import { ReactComponent as Hourglass } from "../../../../../assets/layout/main/events/hourglass.svg";
import { Winner } from "types/types";

type singleEventProps = {
  data: Winner;
};

const SingleEvent: FC<singleEventProps> = ({ data }) => {
  return (
    <div className={styles["event-container"]}>
      <div className={styles["info-container"]}>
        <div className={styles["payout-container"]}>
          <span className={styles["payout-container__header"]}>Payout</span>

          <div className={styles["payout-container__data"]}>
            <span>{data.payout}</span>
            <span>stars</span>
          </div>
        </div>
        <div className={styles["row-container"]}>
          <div className={styles["row-container__first-row"]}>
            <span>
              {Math.floor((new Date().getTime() - data.howLongAgo) / 1000) + 1}{" "}
              sec ago
            </span>
            <div className={styles["row-container__first-row__time"]}>
              <Hourglass />
              <div className={styles["row-container__first-row__info"]}>
                <span>{data.duration}</span>
                <span>{data.roundsQuantity} rounds</span>
              </div>
            </div>
          </div>
          <div className={styles["row-container__second-row"]}>
            <span>{data.name}</span>
            <span>{data.title}</span>
          </div>
        </div>
      </div>
      <EventContainerElement
        className={styles["event-container__background"]}
      />
    </div>
  );
};

export default SingleEvent;
