import { updateField } from "../firebase/firebaseFirestore";
import { UserType } from "types/types";

export const handleChangeFightQuantity = async (user: UserType | null) => {
  if (!user) return;
  const currentFightQuantity = user?.fights_quantity!;
  const newFightQuantity = currentFightQuantity + 1;

  await updateField(
    "users",
    user?.id.toString()!,
    "fights_quantity",
    newFightQuantity
  );
};
