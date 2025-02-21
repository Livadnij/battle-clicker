import React, { FC } from "react";
import styles from "./cyber-input.module.scss";
import { ReactComponent as InputElement } from "../../../../assets/layout/register/cyber-input.svg";

type CyberInputType = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const CyberInput: FC<CyberInputType> = ({ label, value, onChange }) => {
  return (
    <div className={styles["cyber-input"]}>
      <div className={styles["cyber-input__blur"]} />
      <InputElement className={styles["cyber-input__img"]} />
      <span className={styles["cyber-input__label"]}>{label}</span>
      <input
        className={styles["cyber-input__input"]}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CyberInput;
