import React, { FC } from "react";

import style from "./FinishRow.module.scss";

type FinishRowProps = {
    winnerName: string;
    winnerTurn: boolean;
};

const FinishRow: FC<FinishRowProps> = ({winnerName, winnerTurn}) => {
    const title = 'FIGHT ENDED';
    const subtitle = 'THE WINNER IS:';
    return (
        <div className={style["finish"]}>
            <span className={style["finish__title"]}>{title}</span>
            <div
                className={`${style["finish__info"]} ${winnerTurn ? style["user"] : style["bot"]}`}
            >
                <span>{subtitle}</span>
                <span>{winnerName.toUpperCase()}</span>
            </div>
        </div>
    );
};

export default FinishRow;
