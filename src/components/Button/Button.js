import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from './Button.styles.js';

const Button = ({ active, children }) => {
  return <StyledButton active={active}>{children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool
};

Button.defaultProps = {
  active: false
};

export default Button;
