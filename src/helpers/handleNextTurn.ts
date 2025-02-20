import { BattleLogType } from "types/types";

type NextTurn = {
  setLog: React.Dispatch<React.SetStateAction<BattleLogType[]>>;
  currentLog: BattleLogType;
  setTurn: React.Dispatch<React.SetStateAction<boolean>>;
  setUserChoice: React.Dispatch<React.SetStateAction<number | null>>;
};

export const handleNextTurn = ({
  setLog,
  currentLog,
  setTurn,
  setUserChoice,
}: NextTurn) => {
  if (!currentLog) return;
  setLog((prev) => prev.concat([currentLog]));
  setTurn((prev) => !prev);
  setUserChoice(null);
};
