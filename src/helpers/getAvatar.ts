import user0 from "../assets/layout/chars/left_0.png";
import user1 from "../assets/layout/chars/left_1.png";
import user2 from "../assets/layout/chars/left_2.png";
import user3 from "../assets/layout/chars/right_3.png";
import enemy0 from "../assets/layout/chars/right_0.png";
import enemy1 from "../assets/layout/chars/right_1.png";
import enemy2 from "../assets/layout/chars/right_2.png";
import enemy3 from "../assets/layout/chars/left_3.png";

const userAvatars = [user0, user1, user2, user3];
const enemyAvatars = [enemy0, enemy1, enemy2, enemy3];

export const getAvatar = (person: "user" | "enemy", avatar: number) => {
  return person === "user" ? userAvatars[avatar] : enemyAvatars[avatar];
};
