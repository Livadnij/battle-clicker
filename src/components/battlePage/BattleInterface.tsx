import * as React from 'react';
import RadioGroup, { ValueType } from "./RadioGroup";

type BattleInterfaceProps = {
    turn: boolean;
    title: string;
    options: ValueType[];
    userChoise: number | null;
    setUserChoise: React.Dispatch<React.SetStateAction<number | null>>;
    attackHandler: () => void;
};

export function BattleInterface(
    {
        turn,
        userChoise,
        setUserChoise,
        title,
        options,
        attackHandler
    }: BattleInterfaceProps) {
    return (
        <div>
            <RadioGroup
                userChoise={userChoise}
                setUserChoise={setUserChoise}
                title={title}
                options={options}
            />
            <button onClick={attackHandler}>
                {turn ? "Attack!" : "Block!"}{" "}
            </button>
        </div>
    );
};