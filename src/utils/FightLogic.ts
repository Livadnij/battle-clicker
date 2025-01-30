import { BattleLogType, ScoreType } from "../components/types/types";
import { randomizer } from "./Randomizer";
import { sendEvent } from "./analytics";
import { ANALYTICS_EVENTS } from "../constants/analytics";

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

export default function fightLogic({
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
    // Bot will not defend self part of body which user selected
    const options = [0, 1, 2].filter((num) => num !== userChoise);
    const randomChoise = randomizer(0, options.length - 1)
    return options[randomChoise];
  };

  const randomNum =
      // If bot one point left to win and bot must surrender
      // If turn = true, user turn
      score.botScore === maxScore - 1 && botSurrender
          ? turn
              ? getRandomFromRemaining()
              : userChoise
          : randomizer(0, numberOfBodyParts - 1);

  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const time = `${hours}:${minutes}`;

  console.log(randomNum, userChoise);

  const logTemplate = () =>
    `${turn ? userName : botName} hits ${!turn ? userName : botName} in the ${
      turn
        ? userChoise !== null
          ? areas[userChoise]
          : areas[3]
        : areas[randomNum !== null ? randomNum : 3]
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
    if (turn && userChoise !== randomNum  && userChoise) {
      //if its users turn and he hits unarmored part of the bots body
      setScore((prev) => {
        return { ...prev, userScore: prev.userScore + 1 };
      });
      sendEvent(ANALYTICS_EVENTS.ATTACK,  {
        data: areas[userChoise],
        name: userName
      });
      handleNextTurn();
    } else if (turn && userChoise === randomNum  && userChoise) {
      //if its users turn and he hits armored part of the bots body
      sendEvent(ANALYTICS_EVENTS.ATTACK,  {
        data: areas[userChoise],
        name: userName
      });
      handleNextTurn();
    } else if (!turn && userChoise !== randomNum  && userChoise) {
      //if its bots turn and he hits unarmored part of the users body
      setScore((prev) => {
        return { ...prev, botScore: prev.botScore + 1 };
      });
      sendEvent(ANALYTICS_EVENTS.BLOCK,  {
        data: areas[userChoise],
        name: userName
      });
      handleNextTurn();
    } else if (!turn && userChoise === randomNum && userChoise) {
      sendEvent(ANALYTICS_EVENTS.BLOCK, {
        data: areas[userChoise],
        name: userName
      });
      //if its bots turn and he hits armored part of the users body
      handleNextTurn();
    } else {
      console.log("fight logic failed");
    }
  }, timeoutDelay);
  return "";
}
