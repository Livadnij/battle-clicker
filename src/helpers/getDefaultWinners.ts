import { randomizer } from "utils/Randomizer";
import { getRandomBotName } from "./getRandomBotName";
import settings from "../settings/settings.json";

export const getDefaultWinner = (number: number) => {
  const winners = [];
  for (let i = 0; i <= number - 1; i++) {
    winners.unshift({
      number: i,
      name: getRandomBotName(),
      title: "Won flawless victory!",
      payout: settings.fightPrice,
      roundsQuantity: 3,
      duration: `${randomizer(200, 500) * 0.01} min`,
      howLongAgo: new Date().getTime(),
    });
  }
  return winners;
};
