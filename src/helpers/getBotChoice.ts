import { BodyAreaType, ScoreType } from "types/types";

type BotChoice = {
  userChoice: number | null;
  score: ScoreType;
  turn: boolean;
  areas: BodyAreaType[];
  maxScore?: number;
  botSurrender?: boolean;
};

export function getBotChoice({
  userChoice,
  score,
  turn,
  areas,
  maxScore = 3,
  botSurrender = true,
}: BotChoice) {
  const numberOfBodyParts = areas.length;

  const getRandomFromRemaining = () => {
    const options = areas
      .map((area) => area.value)
      .filter((num) => num !== userChoice);
    return options[Math.floor(Math.random() * options.length)];
  };

  const isBotSurrender = score.botScore === maxScore - 1 && botSurrender;

  if (isBotSurrender) {
    return turn ? getRandomFromRemaining() : userChoice;
  }

  const botChoice = Math.floor(Math.random() * numberOfBodyParts);

  return botChoice;
}
