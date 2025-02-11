import React, { FC } from "react";
import styles from "./TextInputField.module.scss";
import layoutElementOne from "../../assets/layout/Vector2841.svg";
import { UserType } from "types/types";

type TextInputFieldType = {
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  limitations: [number, number];
};

const TextInputField: FC<TextInputFieldType> = ({
  placeholder,
  value,
  setValue,
  limitations,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles["input-container"]}>
      <input
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        type="text"
        minLength={limitations[0]}
        maxLength={limitations[1]}
      />
    </div>
  );
};

export default TextInputField;
