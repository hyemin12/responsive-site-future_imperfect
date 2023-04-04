import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../styles/theme";

const Button = ({ text, path, width }) => {
  return (
    <ButtonLink to={path ? `./post/${path}` : "#"} size={theme.device}>
      <Btn width={width} size={theme.device}>
        {text}
      </Btn>
    </ButtonLink>
  );
};
const ButtonLink = styled(Link)`
  @media ${({ size }) => size.mobile} {
    display: block;
    width: 100%;
  }
`;
const Btn = styled.button`
  ${({ width }) => width && `width:${width}`};
  background-color: transparent;
  padding: 1.8em 2.1em;
  border: 1px solid rgba(160, 160, 160, 0.3);
  letter-spacing: 0.2em;
  font-size: 0.7em;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    border-color: #2ebaae;
    color: #2ebaae;
  }
  @media ${({ size }) => size.mobile} {
    display: block;
    width: 100%;
  }
`;
export default Button;
