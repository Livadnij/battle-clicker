import React, { useEffect, useMemo, useState } from "react";

import Layout from "../components/layout/Layout";
import { BattleLogType, ScoreType } from "../types/types";
import BattleLog from "../components/battlePage/log/BattleLog";
import { getRandomBotName } from "../helpers/getRandomBotName";
import { getCurrentTime } from "../helpers/getCurrentTime";
import { showConsoleArt } from "../utils/ConsoleArt";
import settings from "../settings/settings.json";
import { BattleInterface } from "../components/battlePage/selection/SelectionInterface";
import { ScoreInterface } from "../components/battlePage/score/ScoreInterface";
import styles from "../styles/battle.module.scss";
import { useUser } from "context/UserContext";
import { ResultInterface } from "components/battlePage/result/ResultInterface";
import { useNavigation } from "hooks/useNavigation";
import { randomizer } from "utils/Randomizer";
import { getBotChoice } from "helpers/getBotChoice";
import { logTemplate } from "helpers/logTemplate";
import { resolveFightLogic } from "helpers/resolveFightLogic";
import { handleChangeBalance } from "helpers/handleChangeBalance";
import { handleExitFight } from "helpers/handleExitFight";
import fightHeader from "../assets/layout/fight/fight-header.png"
import headerAttack from "../assets/layout/fight/attack.svg"
import headerDefeat from "../assets/layout/fight/defeat.svg"
import fightBackground from "../assets/layout/fight/fight-background.png"
import pickSection from "../assets/layout/fight/pick-section.svg"
import head from "../assets/layout/fight/head.svg"
import body from "../assets/layout/fight/body.svg"
import legs from "../assets/layout/fight/legs.svg"

showConsoleArt();

const scoreDefaultValue = {botScore: 0, userScore: 0};
const logDefaultValue = [{time: getCurrentTime(), log: "Fight Started"}];

const FightPage: React.FC = () => {
    const {goHome} = useNavigation();
    const {user} = useUser();
    const [botName, setBotName] = useState(getRandomBotName());

    const [score, setScore] = useState<ScoreType>(scoreDefaultValue);
    const [userChoice, setUserChoice] = useState<number | null>(null);
    const [log, setLog] = useState<BattleLogType[]>(logDefaultValue);
    const [turn, setTurn] = useState<boolean>(!!randomizer(0, 1));
    const [userBided, setUserBided] = useState<boolean>(false);

    const userName = user ? user.username : "not found";
    const areas = settings.fightOptions;
    const fightPrice = settings.fightPrice;
    const maxScore = settings.maxScore;
    const maxBotSurrenderCount = settings.maxBotSurrenderCount;
    const botSurrender = user?.fights_quantity! > maxBotSurrenderCount;

    areas.map((area) => {
        if (area.title === "head") {
            area.image = head;
        } else if (area.title === "body") {
            area.image = body;
        } else if (area.title === "legs") {
            area.image = legs;
        }
    })

    const radioTitle = useMemo(() => {
        return turn ? "Pick an area to punch!" : "Pick an area to Block!";
    }, [turn]);
    const isResult = useMemo(
        () => score.botScore === 3 || score.userScore === 3,
        [score]
    );

    const attackHandler = () => {
        const botChoice = getBotChoice({
            userChoice,
            score,
            turn,
            areas,
            maxScore,
            botSurrender,
        });

        const currentLog = logTemplate({
            turn,
            userName,
            botName,
            areas,
            botChoice,
            userChoice,
        });

        resolveFightLogic({
            turn,
            userChoice,
            botChoice,
            setScore,
            setTurn,
            setLog,
            setUserChoice,
            currentLog,
        });
    };

    useEffect(() => {
        if (!userBided) {
            handleChangeBalance({state: "bid", user, fightPrice});
            setUserBided((prev) => !prev);
        }
    }, []);

    const userWins = score.botScore === 3 || score.userScore === 3;

    return (
        <Layout
            backgroundImage={fightBackground}
            buttonTitle={userWins ? "home" : turn ? "Attack!" : "Block!"}
            onClick={
                userWins
                    ? () =>
                        handleExitFight({score, user, userBided, fightPrice, goHome})
                    : userChoice === null
                        ? () => {
                        }
                        : attackHandler
            }
        >
            <div className={styles["battle"]}>
                <div className={styles["battle__header"]}>
                    <img className={styles["battle__header-line"]} src={fightHeader}/>
                    <img className={styles["battle__header-state"]} src={turn ? headerAttack : headerDefeat}/>
                </div>
                <div className={styles["battle__main"]}>
                    <img className={styles["battle__main-pick"]} src={pickSection}/>
                    <div className={styles["battle__main-items"]}>
                        {areas.map((area, index) => (
                            <div className={styles["battle__main-item"]}>
                                <div className={styles["battle__item-header"]}>
                                    <img src={area.image} className={styles["battle__item-image"]} style={{height: area.title === 'legs'  ? '75%' : ''}}/>
                                </div>
                                <div className={styles["battle__item-footer"]}>
                                    {area.title.toUpperCase()}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/*<ScoreInterface userName={userName} botName={botName} score={score} />*/}
                {/*<BattleLog logArray={log} />*/}
                {/*{isResult ? (*/}
                {/*  <ResultInterface botName={botName} score={score} />*/}
                {/*) : (*/}
                {/*  <BattleInterface*/}
                {/*    turn={turn}*/}
                {/*    title={radioTitle}*/}
                {/*    options={areas}*/}
                {/*    userChoise={userChoice}*/}
                {/*    setUserChoise={setUserChoice}*/}
                {/*    attackHandler={attackHandler}*/}
                {/*  />*/}
                {/*)}*/}


            </div>
        </Layout>
    );
};

export default FightPage;
