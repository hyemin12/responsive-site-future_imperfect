import { Link } from "react-router-dom";
import styled from "styled-components";

import Date from "./Elements/Date";
import Title from "./Elements/Title";

const MiniPost = (post) => {
  const { id, title, date, img } = post;
  return (
    <MiniPostContainer>
      <>
        <ImgWrapper to={`post/:${id}`}>
          <Img src={img.type} alt={title} />
        </ImgWrapper>
      </>
      <div>
        <Title text={title} path={id} size={"0.8em"} short={2} />
        <Date d={date} />
      </div>
    </MiniPostContainer>
  );
};
const MiniPostContainer = styled.article`
  display: flex;
  gap: 2em;
  padding: 1.2em 0;
  border-bottom: 1px solid rgba(160, 160, 160, 0.3);
  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }
`;
const ImgWrapper = styled(Link)`
  display: flex;
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  overflow: hidden;
  position: relative;
`;
const Img = styled.img`
  display: block;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default MiniPost;
