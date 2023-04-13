import styled from "styled-components";

import theme from "./styles/theme";

import Date from "./Elements/Date";
import Title from "./Elements/Title";
import ImgSquare from "./Elements/ImgSquare";

/** 이미지 - 제목, 날짜로만 이루어진 포스트  */
const MiniPost = (post) => {
  const { id, title, date, img } = post;
  return (
    <MiniPostContainer theme={theme}>
      <ImgSquare id={id} title={title} img={img} width={"60px"} />

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
  border-bottom: ${({ theme }) => theme.color.border};
  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }
`;

export default MiniPost;
