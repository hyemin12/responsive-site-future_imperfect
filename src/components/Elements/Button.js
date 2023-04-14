import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import theme from "../styles/theme";

const Button = ({ text, path, width, type, func }) => {
  if (type === "link")
    return (
      <ButtonLink to={path ? `./post/${path}` : "#"} theme={theme}>
        <Btn width={width} theme={theme}>
          {text}
        </Btn>
      </ButtonLink>
    );
  return (
    <Btn width={width} theme={theme} onClick={func && func}>
      {text}
    </Btn>
  );
};
const ButtonLink = styled(Link)`
  @media ${({ theme }) => theme.device.mobile} {
    display: block;
    width: 100%;
  }
`;
export const BtnStyle = css`
  ${({ width }) => width && `width:${width}`};
  background-color: transparent;
  padding: 1.8em 2.1em;
  border: ${({ theme }) => theme.color.border};
  letter-spacing: 0.2em;
  font-size: 0.7em;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    border-color: ${({ theme }) => theme.color.pointColor};
    color: ${({ theme }) => theme.color.pointColor};
  }
  @media ${({ theme }) => theme.device.mobile} {
    display: block;
    width: 100%;
  }
`;
const Btn = styled.button`
  ${BtnStyle}
`;
export default Button;
