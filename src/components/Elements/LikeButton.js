import styled from "styled-components";

import { FaHeart } from "react-icons/fa";

const LikeButton = ({ count }) => {
  return (
    <Btn>
      <FaHeart />
      {count}
    </Btn>
  );
};
const Btn = styled.div`
  &:hover {
    color: #2ebaae;
  }
`;
export default LikeButton;
