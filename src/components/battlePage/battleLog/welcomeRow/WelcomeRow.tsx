import React, { FC } from "react";
import { motion } from "framer-motion";

import style from "./WelcomeRow.module.scss";

type WelcomeRowProps = {
  userName: string;
  botName: string;
};

const WelcomeRow: FC<WelcomeRowProps> = ({ userName, botName }) => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }} // Начальное положение
      animate={{ x: 0, opacity: 1 }} // Финальное положение
      transition={{ type: "spring", stiffness: 100 }}
      className={style["welcome"]}
    >
      <span className={style["welcome__title"]}>FIGHT STARTED</span>
      <div className={style["welcome__info"]}>
        <span>{userName.toUpperCase()}</span>
        <span>VS.</span>
        <span>{botName.toUpperCase()}</span>
      </div>
    </motion.div>
  );
};

export default WelcomeRow;
