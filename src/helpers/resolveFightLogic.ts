import { BattleLogType, ScoreType } from "types/types";
import { handleNextTurn } from "./handleNextTurn";
import { randomizer } from "utils/Randomizer";

type FightLogic = {
  turn: boolean;
  userChoice: number | null;
  botChoice: number | null;
  setScore: React.Dispatch<React.SetStateAction<ScoreType>>;
  setTurn: React.Dispatch<React.SetStateAction<boolean>>;
  setLog: React.Dispatch<React.SetStateAction<BattleLogType[]>>;
  setUserChoice: React.Dispatch<React.SetStateAction<number | null>>;
  currentLog: BattleLogType | undefined;
};

export const resolveFightLogic = ({
  turn,
  userChoice,
  botChoice,
  setScore,
  setTurn,
  setLog,
  setUserChoice,
  currentLog,
}: FightLogic) => {
  if (userChoice === null || botChoice === null || !currentLog) return;
  setTimeout(() => {
    if (turn && userChoice !== botChoice) {
      //if its users turn and he hits unarmored part of the bots body
      setScore((prev) => {
        return { ...prev, userScore: prev.userScore + 1 };
      });
      handleNextTurn({ setLog, currentLog, setTurn, setUserChoice });
    } else if (turn && userChoice === botChoice) {
      //if its users turn and he hits armored part of the bots body
      handleNextTurn({ setLog, currentLog, setTurn, setUserChoice });
    } else if (!turn && userChoice !== botChoice) {
      //if its bots turn and he hits unarmored part of the users body
      setScore((prev) => {
        return { ...prev, botScore: prev.botScore + 1 };
      });
      handleNextTurn({ setLog, currentLog, setTurn, setUserChoice });
    } else if (!turn && userChoice === botChoice) {
      //if its bots turn and he hits armored part of the users body
      handleNextTurn({ setLog, currentLog, setTurn, setUserChoice });
    } else {
      console.log("fight logic failed");
    }
  }, randomizer(0.5, 1.5) * 1000);
};
