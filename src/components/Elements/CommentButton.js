import styled from "styled-components";

import { FaComment } from "react-icons/fa";

const CommentButton = ({ count }) => {
  return (
    <Btn>
      <FaComment />
      {count}
    </Btn>
  );
};
const Btn = styled.div`
  &:hover {
    color: #2ebaae;
  }
`;
export default CommentButton;
