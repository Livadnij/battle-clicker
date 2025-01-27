import { BattleLogType, ScoreType } from "@/components/types/types";

export type FightLogicType = {
  setUserChoise: React.Dispatch<React.SetStateAction<number | null>>;
  userName: string;
  botName: string;
  setTurn: React.Dispatch<React.SetStateAction<boolean>>;
  setLog: React.Dispatch<React.SetStateAction<BattleLogType[]>>;
  userChoise: number | null;
  turn: boolean;
  score: ScoreType;
  setScore: React.Dispatch<React.SetStateAction<ScoreType>>;
  //
  botSurrender?: boolean;
  numberOfBodyParts?: number;
  maxScore?: number;
  timeoutDelay?: number;
};

const areas: string[] = ["head", "body", "legs", "null"];

export default function FightLogic({
  setUserChoise,
  userName,
  botName,
  setTurn,
  setLog,
  userChoise,
  turn,
  score,
  setScore,
  //
  botSurrender = true,
  numberOfBodyParts = 3,
  maxScore = 3,
  timeoutDelay = 1500,
}: FightLogicType) {
  const getRandomFromRemaining = () => {
    const options = [0, 1, 2].filter((num) => num !== userChoise);
    return options[Math.floor(Math.random() * options.length)];
  };

  const randomNum =
    score.botScore === maxScore - 1 && botSurrender
      ? getRandomFromRemaining()
      : Math.floor(Math.random() * numberOfBodyParts);

  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const time = `${hours}:${minutes}`;

  const logTemplate = () =>
    `${turn ? userName : botName} hits ${!turn ? userName : botName} in the ${
      turn
        ? userChoise !== null
          ? areas[userChoise]
          : areas[3]
        : areas[randomNum]
    }
    ${
      userChoise === randomNum
        ? ` but ${!turn ? userName : botName} blocks an attack`
        : ` but ${!turn ? userName : botName} couldnt block an attack`
    }`;

  const handleNextTurn = () => {
    setLog((prev) => prev.concat([{ log: logTemplate(), time: time }]));
    setTurn((prev) => !prev);
    setUserChoise(null);
  };

  setTimeout(() => {
    if (turn && userChoise !== randomNum) {
      //if its users turn and he hits unarmored part of the bots body
      setScore((prev) => {
        return { ...prev, userScore: prev.userScore + 1 };
      });
      handleNextTurn();
    } else if (turn && userChoise === randomNum) {
      //if its users turn and he hits armored part of the bots body
      handleNextTurn();
    } else if (!turn && userChoise !== randomNum) {
      //if its bots turn and he hits unarmored part of the users body
      setScore((prev) => {
        return { ...prev, botScore: prev.botScore + 1 };
      });
      handleNextTurn();
    } else if (!turn && userChoise === randomNum) {
      //if its bots turn and he hits armored part of the users body
      handleNextTurn();
    } else {
      console.log("fight logic failed");
    }
  }, timeoutDelay);
  return "";
}
