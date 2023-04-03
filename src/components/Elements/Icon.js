import styled from "styled-components";

const Icon = ({ icon }) => {
  return <I>{icon}</I>;
};

export const I = styled.i`
  cursor: pointer;
  transition: 0.4s;
  &:last-child {
    border-left: none;
  }
  svg {
    fill: #aaa;
    &:hover {
      fill: #2ebaae;
    }
  }
`;
export default Icon;
