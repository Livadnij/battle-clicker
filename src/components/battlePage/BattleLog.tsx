import React, { FC } from "react";
import { BattleLogType } from "../types/types";

type BattleLogProps = {
  logArray: BattleLogType[];
};

const BattleLog: FC<BattleLogProps> = ({ logArray }) => {
  return (
    <>
      <h3> Battle log :</h3>
      <ul>
        {logArray?.map((data, index) => {
          return <li key={index}>{`${data.time} - ${data.log}`}</li>;
        })}
      </ul>
    </>
  );
};

export default BattleLog;
