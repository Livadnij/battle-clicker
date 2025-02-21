import { BodyAreaType } from "types/types";
import { getCurrentTime } from "./getCurrentTime";

type Log = {
  turn: boolean;
  userName: string;
  botName: string;
  areas: BodyAreaType[];
  botChoice: number | null;
  userChoice: number | null;
};

export const logTemplate = ({
  turn,
  userName,
  botName,
  areas,
  botChoice,
  userChoice,
}: Log) => {
  const time = getCurrentTime();
  const mappedAreas = areas.map((area) => area.title);
  if (userChoice === null || botChoice === null) return;

  const attackerName = turn ? "You" : botName;
  const defenderName = !turn ? "You" : botName;
  const hitArea = turn ? mappedAreas[userChoice] : mappedAreas[botChoice];
  const defendAction =
    userChoice === botChoice
      ? `${defenderName} block an attack`
      : `${defenderName} couldnt block an attack`;

  const description = `${attackerName} hits ${defenderName} in the ${hitArea}. 
  ${defendAction}`;

  const title = turn ? "Smash them!" : "Time to defend!";

  const getSuccess = () => {
    if (botChoice === userChoice) {
      return "draw";
    }
    if (turn && botChoice !== userChoice) {
      return "you won";
    } else if (!turn && botChoice !== userChoice) {
      return "you lost";
    } else {
      return "";
    }
  };

  return { time, description, success: getSuccess(), userSide: turn, title };
};
