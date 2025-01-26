type FightLogicType = {
  playersAttack: number;
  round: number;
  botScore: number;
  playerScore: number;
  numberOfBodyParts?: number;
  maxScore?: number;
};

// Head = 0
// Body = 1
// Legs = 2

export default function FightLogic({
  playerScore,
  playersAttack,
  round,
  botScore,
  numberOfBodyParts = 3,
  maxScore = 3,
}: FightLogicType) {
  const randomNum = Math.floor(Math.random() * numberOfBodyParts);

  if (botScore === maxScore - 1) {
  }

  return "";
}
