import React from 'react';

function Select(props) {
  const { value, handleChange, optionsArr } = props;

  const options = optionsArr.map((option) => (
    <option key={option.OPTION_VALUE} value={option.OPTION_VALUE}>
      {option.TEXT_VALUE}
    </option>
  ));

  return (
    <select name='accountType' onChange={handleChange} value={value}>
      {options}
    </select>
  );
}

export default Select;
