import React from 'react';
import PropTypes from 'prop-types';
import StyledContainer from './Container.styles';

const Container = ({
  children,
  size,
  center,
  background,
  overlay,
  maxWidth,
  ...rest
}) => {
  return (
    <StyledContainer
      size={size}
      center={center}
      background={background}
      overlay={overlay}
      maxWidth={maxWidth}
      {...rest}
    >
      {children}
    </StyledContainer>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.number,
  center: PropTypes.oneOf(['vertical', 'horizontal', true, false]),
  background: PropTypes.string,
  overlay: PropTypes.string,
  maxWidth: PropTypes.string
};

Container.defaultProps = {
  size: 0,
  center: false,
  background: '',
  overlay: '',
  maxWidth: ''
};

export default Container;
