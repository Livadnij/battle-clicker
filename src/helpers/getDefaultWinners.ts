import { randomizer } from "utils/Randomizer";
import { getRandomBotData } from "./getRandomBotName";
import settings from "../settings/settings.json";

export const getDefaultWinner = (number: number) => {
  const winners = [];
  for (let i = 0; i <= number - 1; i++) {
    winners.unshift({
      number: i,
      name: getRandomBotData().name,
      title: "Won flawless victory!",
      payout: settings.fightPrice,
      roundsQuantity: 3,
      duration: `${randomizer(1, 5)}.${randomizer(0, 5)}0 min`,
      howLongAgo: new Date().getTime(),
    });
  }
  return winners;
};
