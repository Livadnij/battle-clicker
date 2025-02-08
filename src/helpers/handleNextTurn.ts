import { BattleLogType } from "types/types";
import { getCurrentTime } from "./getCurrentTime";

type NextTurn = {
  setLog: React.Dispatch<React.SetStateAction<BattleLogType[]>>;
  currentLog: string | undefined;
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
  const time = getCurrentTime();
  setLog((prev) => prev.concat([{ log: currentLog, time: time }]));
  setTurn((prev) => !prev);
  setUserChoice(null);
};
