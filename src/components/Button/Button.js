import React, { PropTypes } from 'react';

const Button = ({ handleOnClick, value }) => (
  <button
    type="button"
    onClick={handleOnClick}
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
