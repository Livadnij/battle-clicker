import { ScoreType, UserType } from "types/types";
import { handleChangeFightQuantity } from "./handleChangeFightQuantity";
import { useNavigation } from "hooks/useNavigation";
import { handleChangeBalance } from "./handleChangeBalance";

type ExitFight = {
  score: ScoreType;
  user: UserType | null;
  userBided: boolean;
  fightPrice: number;
  goHome: () => void;
};

export const handleExitFight = ({
  score,
  user,
  userBided,
  fightPrice,
  goHome,
}: ExitFight) => {
  if (!user) return;
  if (score.botScore === 3) {
    handleChangeFightQuantity(user);
    goHome();
  }
  if (userBided && score.userScore === 3) {
    handleChangeBalance({ state: "win", user, fightPrice });
    handleChangeFightQuantity(user);
    goHome();
  }
};
