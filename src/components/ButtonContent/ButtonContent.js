import React, { PropTypes } from 'react';

const ButtonContent = ({ content }) => (
  <div>{content}</div>
);

ButtonContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default ButtonContent;
