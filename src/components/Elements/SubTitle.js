import styled from "styled-components";

const SubTitle = ({ text, size, short }) => {
  return (
    <H4 size={size} short={short}>
      {text}
    </H4>
  );
};
export const H4 = styled.h4`
  color: #646464;
  font-size: ${({ size }) => (size ? size : "0.7em")};
  font-weight: 400;
  letter-spacing: 0.2em;
  line-height: 1.6;
  ${({ short }) =>
    short &&
    `display: -webkit-box;
-webkit-line-clamp: ${short};
-webkit-box-orient: vertical;
overflow: hidden;`};
`;

export default SubTitle;
