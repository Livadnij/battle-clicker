import * as React from 'react';

type ScoreInterfaceProps = {
    userName: string;
    botName: string;
    score: { botScore: number; userScore: number; };
};

export function ScoreInterface(
    {
        userName,
        botName,
        score
    }: ScoreInterfaceProps) {
    return (
        <div>
            <h2>SCORE</h2>
            <h3>{`${userName} : ${score.userScore} points`}</h3>
            <h3>{`${botName} : ${score.botScore} points`}</h3>
        </div>
    );
};