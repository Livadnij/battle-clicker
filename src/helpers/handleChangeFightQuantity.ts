import { trackEvent } from "utils/analytics";
import {
  getUserById,
  updateField,
  updateUser,
} from "../firebase/firebaseFirestore";
import { UserType } from "types/types";

export const handleChangeFightQuantity = async (
  user: UserType | null,
  fightResult: "victory" | "defeat"
) => {
  if (!user) return;
  try {
    const fetchedUser = await getUserById("users", user.id.toString());

    const currentFightQuantity = user?.fights_quantity!;
    const newFightQuantity = currentFightQuantity + 1;

    if (!fetchedUser) return;
    await updateUser(user.id.toString(), "users", {
      ...fetchedUser,
      fights_quantity: newFightQuantity,
      fights_lost:
        fightResult === "defeat"
          ? fetchedUser.fights_lost + 1
          : fetchedUser.fights_lost,
      fights_won:
        fightResult === "victory"
          ? fetchedUser.fights_won + 1
          : fetchedUser.fights_won,
    });
  } catch (error) {
    trackEvent.ERROR({ error: `Error updating user's fight data: ${error}` });
  }
};
