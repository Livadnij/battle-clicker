export type ScoreType = {
  botScore: number;
  userScore: number;
};

export type BodyAreaType = { title: string; value: number };

export type Areas = BodyAreaType[];

export type BattleLogType = {
  title: string;
  time: string;
  description: string;
  success: string;
  userSide: boolean;
};

export type UserType = {
  id: string;
  balance: number;
  username: string;
  avatar: number;
  fights_quantity: number;
  fights_won: number;
  fights_lost: number;
  session_quantity: number;
  deposit_quantity: number;
  deposit_sum: number;
};

export type Winner = {
  number: number;
  name: string;
  title: string;
  payout: number;
  roundsQuantity: number;
  duration: string;
  howLongAgo: number;
};
