import React from 'react';

function RadioInput(props) {
  const { handleChange, value, stateValue, radioText } = props;
  return (
    <label>
      <input
        type='radio'
        name='gender'
        checked={stateValue === value}
        value={value}
        onChange={handleChange}
      />
      {radioText}
    </label>
  );
}

export default RadioInput;
