export type ScoreType = {
  botScore: number;
  userScore: number;
};

export type BodyAreaType = { title: string; value: number };

export type Areas = BodyAreaType[];

export type BattleLogType = { time: string; log: string };

export type UserType = {
  id: string;
  balance: number;
  fights_quantity: number;
  username: string;
};

export type MainButtonType = {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};
