import styled from "styled-components";

import theme from "../styles/theme";

import { FaComment } from "react-icons/fa";

const CommentButton = ({ count }) => {
  return (
    <Btn theme={theme}>
      <FaComment />
      {count}
    </Btn>
  );
};
const Btn = styled.div`
  &:hover {
    color: ${({ theme }) => theme.common.pointColor};
  }
`;
export default CommentButton;
