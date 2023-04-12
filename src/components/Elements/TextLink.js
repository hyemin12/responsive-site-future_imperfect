import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import theme from "../styles/theme";

const TextLink = ({ text, type, path, size, padding, offset }) => {
  if (type === "link")
    return (
      <LinkText
        to={path}
        onClick={(e) => e.preventDefault}
        size={size}
        padding={padding}
        offset={offset}
        theme={theme}
      >
        {text}
      </LinkText>
    );
  return (
    <AText
      href={path}
      target="_blank"
      onClick={(e) => e.preventDefault}
      size={size}
      padding={padding}
      offset={offset}
      theme={theme}
    >
      {text}
    </AText>
  );
};

export const style = css`
  ${({ padding }) => padding && `padding: ${padding}`};
  color: #646464;
  font-size: ${({ size }) => (size ? size : "0.7em")};
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-decoration: underline dotted #aaa;
  text-underline-offset: ${({ offset }) => offset}px;
  transition: 0.4s;
  &:hover {
    color: ${({ theme }) => theme.color.pointColor};
    text-decoration: none;
  }
`;

const LinkText = styled(Link)`
  ${style}
`;
const AText = styled.a`
  ${style}
`;

export default TextLink;
