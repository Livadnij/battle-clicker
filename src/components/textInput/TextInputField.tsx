import React, { FC } from "react";
import styles from "./TextInputField.module.scss";
import layoutElementOne from "../../assets/layout/Vector2841.svg";
import { UserType } from "types/types";

type TextInputFieldType = {
  name: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<UserType>>;
  limitations: [number, number];
};

const TextInputField: FC<TextInputFieldType> = ({
  name,
  value,
  setValue,
  limitations,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({ ...prev, [name]: e.target.value }));
  };

  return (
    <div className={styles["input-container"]}>
      <input
        name={name}
        value={value}
        onChange={handleInputChange}
        type="text"
        minLength={limitations[0]}
        maxLength={limitations[1]}
      />
      <img
        src={layoutElementOne}
        alt="Layout Element"
        className={styles["layout-element-one"]}
      />
    </div>
  );
};

export default TextInputField;
