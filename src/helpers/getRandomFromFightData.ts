import { randomizer } from "utils/Randomizer";
import fightData from "../settings/fightData.json";

type FunctionPropsType = {
  settingTitle:
    | "win_titles"
    | "win_battle_log"
    | "draw_titles"
    | "draw_battle_log"
    | "loss_titles"
    | "loss_battle_log";
};

export const getRandomFromFightData = ({ settingTitle }: FunctionPropsType) => {
  const arr = fightData[settingTitle];
  return arr[randomizer(0, arr.length - 1)];
};
