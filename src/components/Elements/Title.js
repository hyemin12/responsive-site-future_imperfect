import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = ({ text, size, type, weight, lineHeight }) => {
  if (type === "link")
    return (
      <Link>
        <H1 size={size} weight={weight} lineHeight={lineHeight}>
          {text}
        </H1>
      </Link>
    );
  return (
    <H1 size={size} weight={weight} lineHeight={lineHeight}>
      {text}
    </H1>
  );
};

const H1 = styled.h1`
  color: #3c3b3b;
  font-size: ${({ size }) => (size ? size : "0.9em")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : 1.4)};
  font-weight: ${({ weight }) => (weight ? weight : 800)};
  letter-spacing: 0.2em;
  transition: 0.4s;
  &:hover {
    color: #2ebaae;
  }
`;
export default Title;
