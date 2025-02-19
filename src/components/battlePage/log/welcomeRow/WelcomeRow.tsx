import React, { FC } from "react";

import style from "./WelcomeRow.module.scss";

type WelcomeRowProps = {
    userName: string;
    botName: string;
};

const WelcomeRow: FC<WelcomeRowProps> = ({userName, botName}) => {
    return (
        <div className={style["welcome"]}>
            <span className={style["welcome__title"]}>Fight started</span>
            <div className={style["welcome__info"]}>
                <span>{userName.toUpperCase()}</span>
                <span>VS.</span>
                <span>{botName.toUpperCase()}</span>
            </div>
        </div>
    );
};

export default WelcomeRow;
