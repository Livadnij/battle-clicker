import settings from "../settings/settings.json";
import { randomizer } from "../utils/Randomizer";

export const getRandomBotName = () => {
    const botNameArray= settings.botNames;
    const botCount = botNameArray.length - 1;
    const randomBotIndex = randomizer(0, botCount);
    const randomBotName = botNameArray[randomBotIndex];

    return randomBotName;
}