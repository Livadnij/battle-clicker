import React from "react";

type RadioGroupType = {
  text: {
    title: string;
    optionOne: { title: string; value: number };
    optionTwo: { title: string; value: number };
    optionThree: { title: string; value: number };
  };
  userChoise: number | null;
  setUserChoise: React.Dispatch<React.SetStateAction<number | null>>;
};

const RadioGroup: React.FC<RadioGroupType> = ({
  text,
  userChoise,
  setUserChoise,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserChoise(Number(event.target.value));
  };

  return (
    <div role="radiogroup" aria-labelledby="radio-group-label">
      <h3 id="radio-group-label" className="text-lg font-medium">
        {text.title}
      </h3>
      <div>
        <label>
          <input
            type="radio"
            name={text.optionOne.title}
            value={text.optionOne.value}
            checked={userChoise === text.optionOne.value}
            onChange={handleChange}
          />
          {text.optionOne.title}
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name={text.optionTwo.title}
            value={text.optionTwo.value}
            checked={userChoise === text.optionTwo.value}
            onChange={handleChange}
          />
          {text.optionTwo.title}
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name={text.optionThree.title}
            value={text.optionThree.value}
            checked={userChoise === text.optionThree.value}
            onChange={handleChange}
          />
          {text.optionThree.title}
        </label>
      </div>
    </div>
  );
};

export default RadioGroup;
