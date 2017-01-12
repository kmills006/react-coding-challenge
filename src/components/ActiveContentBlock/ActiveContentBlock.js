import React, { PropTypes } from 'react';

const ActiveContentBlock = ({ content }) => <div><p>{content}</p></div>;

ActiveContentBlock.propTypes = {
  content: PropTypes.string.isRequired,
};

export default ActiveContentBlock;
