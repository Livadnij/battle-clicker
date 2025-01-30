import * as React from "react";
import styles from "./SelectionInterface.module.scss";

type BattleInterfaceProps = {
  turn: boolean;
  title: string;
  options: ValueType[];
  userChoise: number | null;
  setUserChoise: React.Dispatch<React.SetStateAction<number | null>>;
  attackHandler: () => void;
};

export type ValueType = {
  title: string;
  value: number;
};

export function BattleInterface({
  userChoise,
  setUserChoise,
  title,
  options,
}: BattleInterfaceProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserChoise(Number(event.target.value));
  };

  return (
    <div className={styles["selection-container"]}>
      <h3>{title}</h3>
      <div className={styles["input-container"]}>
        {options.map((option) => (
          <label key={option.value} className={styles["input-wrapper"]}>
            <input
              type="radio"
              name={option.title}
              value={option.value}
              checked={userChoise === option.value}
              onChange={handleChange}
              className={styles["radio-input"]}
            />
            <span className={styles["radio-label"]}>{option.title}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
