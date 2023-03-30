import { Link } from "react-router-dom";
import styled from "styled-components";

const TextLink = ({ text, type, path, size, padding }) => {
  if (type === "link")
    return (
      <LinkText
        to={path}
        onClick={(e) => e.preventDefault}
        size={size}
        padding={padding}
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
    >
      {text}
    </AText>
  );
};

export const LinkText = styled(Link)`
  ${({ padding }) => padding && `padding: ${padding}`};
  padding: 0 2em;
  color: #646464;
  font-size: ${({ size }) => (size ? size : "0.7em")};
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-decoration: underline dotted #aaa;
  text-underline-offset: 5px;
  transition: 0.4s;
  &:hover {
    color: #2ebaae;
    text-decoration: none;
  }
`;
export const AText = styled.a`
  ${({ padding }) => padding && `padding: ${padding}`};
  color: #646464;
  font-size: ${({ size }) => (size ? size : "0.7em")};
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-decoration: underline dotted #aaa;
  text-underline-offset: 5px;
  transition: 0.4s;
  &:hover {
    color: #2ebaae;
    text-decoration: none;
  }
`;
export default TextLink;
