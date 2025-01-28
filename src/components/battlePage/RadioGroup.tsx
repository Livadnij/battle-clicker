import React from "react";

export type ValueType = {
    title: string;
    value: number;
};

type RadioGroupType = {
    options: ValueType[];
    userChoise: number | null;
    setUserChoise: React.Dispatch<React.SetStateAction<number | null>>;
    title: string;
};

const RadioGroup: React.FC<RadioGroupType> = (
    {
        title,
        options,
        userChoise,
        setUserChoise,
    }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserChoise(Number(event.target.value));
    };

    return (
        <div role="radiogroup" aria-labelledby="radio-group-label">
            <h3 id="radio-group-label" className="text-lg font-medium">
                {title}
            </h3>
            {options.map((option) => (
                <div key={option.value}>
                    <label>
                        <input
                            type="radio"
                            name={option.title}
                            value={option.value}
                            checked={userChoise === option.value}
                            onChange={handleChange}
                        />
                        {option.title}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default RadioGroup;