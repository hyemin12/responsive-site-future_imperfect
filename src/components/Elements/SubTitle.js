import styled from "styled-components";

const SubTitle = ({ text, size }) => {
  return <H4 size={size}>{text}</H4>;
};
const H4 = styled.h4`
  color: #646464;
  font-size: ${({ size }) => (size ? size : "0.7em")};
  font-weight: 400;
  letter-spacing: 0.2em;
`;

export default SubTitle;
