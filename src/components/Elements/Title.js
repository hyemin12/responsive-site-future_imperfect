import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Title = ({ text, size, type, weight, lineHeight, path, short }) => {
  const location = useLocation();
  if (type === "link" || location.pathname === "/")
    return (
      <Link to={`post/:${path}`}>
        <H1 size={size} weight={weight} lineHeight={lineHeight} short={short}>
          {text}
        </H1>
      </Link>
    );
  return (
    <H1 size={size} weight={weight} lineHeight={lineHeight} short={short}>
      {text}
    </H1>
  );
};

export const H1 = styled.h1`
  color: #3c3b3b;
  font-size: ${({ size }) => (size ? size : "0.9em")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : 1.4)};
  font-weight: ${({ weight }) => (weight ? weight : 800)};
  letter-spacing: 0.2em;
  transition: 0.4s;
  &:hover {
    color: #2ebaae;
  }

  ${({ short }) =>
    short &&
    `display: -webkit-box;
  -webkit-line-clamp: short;
  -webkit-box-orient: vertical;
  overflow: hidden;`}
`;
export default Title;
