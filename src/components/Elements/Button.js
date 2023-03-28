import styled from "styled-components";

const Button = ({ text }) => {
  return <Btn>{text}</Btn>;
};
const Btn = styled.button`
  background-color: transparent;
  padding: 1.8em 2.1em;
  border: 1px solid rgba(160, 160, 160, 0.3);
  letter-spacing: 0.2em;
  font-size: 0.7em;
  font-weight: bold;
  text-transform: uppercase;
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    border-color: #2ebaae;
    color: #2ebaae;
  }
`;
export default Button;
