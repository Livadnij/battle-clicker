import { Winner } from "types/types";

export const getNextNumber = (winners: Winner[]) => {
  const lastElement = winners.at(0);
  if (lastElement && lastElement.number) {
    return lastElement.number + 1;
  } else {
    return 1;
  }
};
