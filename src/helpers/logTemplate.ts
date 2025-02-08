import { BodyAreaType } from "types/types";

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
  const mappedAreas = areas.map((area) => area.title);
  if (userChoice === null || botChoice === null) return;

  const attackerName = turn ? userName : botName;
  const defenderName = !turn ? userName : botName;
  const hitArea = turn ? mappedAreas[userChoice] : mappedAreas[botChoice];
  const defendAction =
    userChoice === botChoice
      ? ` but ${defenderName} blocks an attack`
      : ` but ${defenderName} couldnt block an attack`;

  return `${attackerName} hits ${defenderName} in the ${hitArea}
    ${defendAction}`;
};
