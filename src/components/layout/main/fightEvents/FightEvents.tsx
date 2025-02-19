import React, { FC, useEffect, useState } from "react";
import styles from "./fightEvents.module.scss";
import { Winner } from "types/types";
//@ts-ignore
import SingleEvent from "./singleEvent/SingleEvent";
import { motion, AnimatePresence } from "framer-motion";
import { randomizer } from "utils/Randomizer";
import { getNextNumber } from "helpers/getNextNumberFromWinnerArray";
import { getRandomBotName } from "helpers/getRandomBotName";
import { getDefaultWinner } from "helpers/getDefaultWinners";
import settings from "../../../../settings/settings.json";

type FightEventsProps = { quantity?: number };

const FightEvents: FC<FightEventsProps> = ({ quantity = 5 }) => {
  const [winners, setWinners] = useState<Winner[]>(getDefaultWinner(quantity));
  const [isRemoving, setIsRemoving] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isRemoving) {
        setIsRemoving(true);
        setTimeout(() => {
          if (winners.length >= quantity) {
            console.log(winners);
            setWinners((prev) => prev.slice(0, -1));
          }

          setTimeout(() => {
            setWinners((prev) => [
              {
                number: getNextNumber(winners),
                name: getRandomBotName(),
                title: "Won flawless victory!",
                payout: settings.fightPrice,
                roundsQuantity: 3,
                duration: `${randomizer(200, 500) * 0.01} min`,
                howLongAgo: new Date().getTime(),
              },
              ...prev,
            ]);
            setIsRemoving(false);
          }, 1000);
        }, 1000);
      }
    }, randomizer(1, 10) * 1000);

    return () => clearInterval(interval);
  }, [isRemoving]);

  return (
    <div
      style={{ aspectRatio: `${6.17 / quantity}` }}
      className={styles["sliding-list"]}
    >
      <AnimatePresence initial={false}>
        {winners.map((item, index) => (
          <motion.div
            key={item.number}
            className={styles["list-item"]}
            initial={{ x: -100, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.7, ease: "easeInOut" },
            }}
            exit={{
              x: 100,
              opacity: 0,
              transition: { duration: 0.7, ease: "easeInOut" },
            }}
          >
            <SingleEvent data={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FightEvents;
