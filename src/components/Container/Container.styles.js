import styled from 'styled-components';

const StyledContainer = styled.div`
  ${(props) => `
width: 100%;
  margin-left: auto;
  box-sizing: border-box;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: ${
    props.center === 'horizontal' || props.center === true
      ? 'center'
      : 'baseline'
  };
  justify-content: ${
    props.center === 'vertical' || props.center === true ? 'center' : 'unset'
  };
  min-height: ${props.size ? `${props.size}vh` : 'unset'};

  ${
    props.background &&
    `&:before {
      position: absolute;
      left: 50%;
      right: 50%;
      width: 100vw;
      height: 100%;
      margin-left: -50vw;
      margin-right: -50vw;
      z-index: -2;
      content: '';
      background: ${props.background};
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }`
  }

  ${
    props.overlay &&
    `&:after { position: absolute;
      left: 50%;
      right: 50%;
      width: 100vw;
      height: 100%;
      margin-left: -50vw;
      margin-right: -50vw;
      z-index: -2;
      content: '';
      background: ${props.overlay};
    }`
  }
    ${props.theme.breakpoints.mediaQuery.xs} {
      padding-left: 16px;
      padding-right: 16px;
    }
    max-width:${
      props.maxWidth
        ? `${props.theme.breakpoints.values[props.maxWidth]}px`
        : `${props.theme.breakpoints.values.lg}px`
    }
`}
`;

export default StyledContainer;
