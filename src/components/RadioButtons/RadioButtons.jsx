import React from "react";
import "./RadioButtons.scss";

const RadioButtons = ({ onChange, selected, options, label }) => {
  return (
    <div className="radio-buttons">
      <p>{label}</p>
      {options.map((option, index) => {
        const optionLower = option.toLowerCase();
        const optionCapitalized =
          optionLower[0].toUpperCase() + optionLower.slice(1);
        return (
          <div key={"radio-button" + option + index}>
            <input
              type="radio"
              name="gender"
              value={optionLower}
              checked={optionLower === selected.toLowerCase()}
              onChange={onChange}
            />
            <label className="radio-buttons__label" htmlFor={optionLower}>
              {optionCapitalized}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default RadioButtons;
