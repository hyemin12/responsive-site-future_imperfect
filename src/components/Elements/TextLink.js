import { Link } from "react-router-dom";
import styled from "styled-components";

const TextLink = ({ text, type, path, size, padding, offset }) => {
  if (type === "link")
    return (
      <AText
        to={path}
        onClick={(e) => e.preventDefault}
        size={size}
        padding={padding}
        offset={offset}
      >
        {text}
      </AText>
    );
  return (
    <AText
      href={path}
      target="_blank"
      onClick={(e) => e.preventDefault}
      size={size}
      padding={padding}
      offset={offset}
    >
      {text}
    </AText>
  );
};

export const AText = styled.a`
  ${({ padding }) => padding && `padding: ${padding}`};
  color: #646464;
  font-size: ${({ size }) => (size ? size : "0.7em")};
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-decoration: underline dotted #aaa;
  text-underline-offset: ${({ offset }) => offset}px;
  transition: 0.4s;
  &:hover {
    color: #2ebaae;
    text-decoration: none;
  }
`;
export default TextLink;
