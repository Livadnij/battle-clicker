import { BodyAreaType } from "types/types";
import { getCurrentTime } from "./getCurrentTime";
import { getRandomFromFightData } from "./getRandomFromFightData";

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
  if (userChoice === null || botChoice === null) return;
  const time = getCurrentTime();

  const getLogDescription = () => {
    if (turn && userChoice !== botChoice) {
      // users turn and user passes bots block and hits him
      return {
        success: "You Won",
        description: getRandomFromFightData({ settingTitle: "win_battle_log" }),
        title: getRandomFromFightData({ settingTitle: "win_titles" }),
      };
    } else if (turn && userChoice === botChoice) {
      // users turn and user couldnt pass bots block
      return {
        success: "Draw",
        description: getRandomFromFightData({
          settingTitle: "draw_battle_log",
        }),
        title: getRandomFromFightData({ settingTitle: "draw_titles" }),
      };
    } else if (!turn && userChoice !== botChoice) {
      // bots turn and bot passes users block and hits him
      return {
        success: "You Lost",
        description: getRandomFromFightData({
          settingTitle: "loss_battle_log",
        }),
        title: getRandomFromFightData({ settingTitle: "loss_titles" }),
      };
    } else if (!turn && userChoice === botChoice) {
      // bots turn and bot couldnt pass bots block
      return {
        success: "Draw",
        description: getRandomFromFightData({
          settingTitle: "draw_battle_log",
        }),
        title: getRandomFromFightData({ settingTitle: "draw_titles" }),
      };
    } else {
      return {
        success: "Failed",
        description: getRandomFromFightData({
          settingTitle: "loss_battle_log",
        }),
        title: getRandomFromFightData({ settingTitle: "loss_titles" }),
      };
    }
  };

  return { time, userSide: turn, ...getLogDescription() };
};
