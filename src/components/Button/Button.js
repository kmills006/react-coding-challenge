import React, { PropTypes } from 'react';
import faker from 'faker';

const Button = ({ handleOnClick, value }) => (
  <button
    type="button"
    onClick={() => handleOnClick(value, faker.internet.color())}
    value={value}
  >
    {value}
  </button>
);

Button.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Button;
