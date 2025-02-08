import { updateField } from "../firebase/firebaseFirestore";
import { UserType } from "types/types";

type UserBalance = {
  state: string;
  user: UserType | null;
  fightPrice: number;
};

export const handleChangeBalance = async ({
  state,
  user,
  fightPrice,
}: UserBalance) => {
  if (!user) return;
  const currentBalance = user?.balance!;

  const newBalance =
    state === "win"
      ? currentBalance + fightPrice
      : state === "bid"
      ? currentBalance - fightPrice
      : undefined;

  if (state !== "bid" && state !== "win") return;

  try {
    await updateField("users", user?.id.toString()!, "balance", newBalance);
  } catch (error) {
    console.log("Failed to fetch user data");
  }
};
