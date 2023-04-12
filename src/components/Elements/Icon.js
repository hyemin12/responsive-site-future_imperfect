import styled from "styled-components";

import theme from "../styles/theme";

const Icon = ({ icon }) => {
  return <I theme={theme}>{icon}</I>;
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
      fill: ${({ theme }) => theme.color.pointColor};
    }
  }
`;
export default Icon;
