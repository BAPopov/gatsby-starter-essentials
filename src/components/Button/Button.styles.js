import styled from 'styled-components';

const Button = styled.button`
  ${(props) => `
background-color: ${props.active ? 'red' : 'blue'};
padding: 30px 20px;
color: ${props.theme.colors.primary};
${props.theme.breakpoints.sm} {
  color: red;
}
`}
`;
export default Button;
