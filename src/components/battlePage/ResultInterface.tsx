import * as React from 'react';

type ResultInterfaceProps = {
    botName: string;
    userName: string;
    score: { botScore: number; userScore: number; };
    restartGame: () => void;
};

export function ResultInterface(
    {
        botName,
        userName,
        score,
        restartGame
    }: ResultInterfaceProps) {
    return (
        <div>
            <>
                <h2>{`${score.botScore === 3 ? botName : userName} WON`}</h2>
                <span>{`Another fight?`}</span>
                <button onClick={restartGame}>yes!</button>
            </>
        </div>
    );
};