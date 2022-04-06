import React from "react";
import "./RadioButtons.scss";

const RadioButtons = ({ onClick, options, caption }) => {
  return (
    <div className="radio-buttons">
      <p>{caption}</p>
      {options.map((option, index) => (
        <React.Fragment key={"radio-button" + index}>
          <input
            type="radio"
            name="gender"
            value={option.toLowerCase()}
            onClick={onClick}
            defaultChecked={index === 0}
          />
          <label
            className="radio-buttons__label"
            htmlFor={option.toLowerCase()}
          >
            {option}
          </label>
        </React.Fragment>
      ))}
    </div>
  );
};

export default RadioButtons;
