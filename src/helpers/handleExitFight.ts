import { ScoreType, UserType } from "types/types";
import { handleChangeFightQuantity } from "./handleChangeFightQuantity";
import { handleChangeBalance } from "./handleChangeBalance";

type ExitFight = {
  score: ScoreType;
  user: UserType | null;
  userBided: boolean;
  fightPrice: number;
  exitCallback: () => void;
};

export const handleExitFight = ({
  score,
  user,
  userBided,
  fightPrice,
  exitCallback,
}: ExitFight) => {
  if (!user) return;
  if (score.botScore === 3) {
    handleChangeFightQuantity(user, "defeat");
    exitCallback();
  }
  if (userBided && score.userScore === 3) {
    handleChangeBalance({ state: "win", user, fightPrice });
    handleChangeFightQuantity(user, "victory");
    exitCallback();
  }
};
