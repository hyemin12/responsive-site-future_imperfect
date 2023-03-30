import styled from "styled-components";

const SubTitle = ({ text, size }) => {
  return <SubtitleH4 size={size}>{text}</SubtitleH4>;
};
export const SubtitleH4 = styled.h4`
  color: #646464;
  font-size: ${({ size }) => (size ? size : "0.7em")};
  font-weight: 400;
  letter-spacing: 0.2em;
`;

export default SubTitle;
