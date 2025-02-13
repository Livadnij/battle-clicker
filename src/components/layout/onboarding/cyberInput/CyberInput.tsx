import React, { FC } from "react";
import styles from "./cyber-input.module.scss";
import cyberSvg from "../../../../assets/layout/register/cyber-input.png";

type CyberInputType = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const CyberInput: FC<CyberInputType> = ({ label, value, onChange }) => {
  console.log(label);
  return (
    <div className={styles["cyber-input"]}>
      <img src={cyberSvg} />
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
