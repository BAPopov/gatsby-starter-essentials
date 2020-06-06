import styled from 'styled-components';

const Button = styled.button`
  ${(props) => `
    background-color: rebeccapurple;
    padding: 30px 20px;
    color: white;
    ${props.theme.breakpoints.sm} {
      background-color: white;
      color: rebeccapurple;
    }
  `}
`;

export default Button;
