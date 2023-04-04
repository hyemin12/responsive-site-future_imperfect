import styled from "styled-components";

import Title from "./Elements/Title";
import Img from "./Elements/Img";
import Date from "./Elements/Date";

import theme from "./styles/theme";

const CardPost = (post) => {
  const { id, title, author, authorImg, img, date } = post;
  return (
    <CardPostContainer size={theme.device}>
      <CardTop>
        <Img src={img.type} alt={title} path={id} />
      </CardTop>
      <CardBottom>
        <div>
          <Title text={title} size={"0.8em"} path={id} short={2} />
          <Date d={date} />
        </div>
        <Author>
          <AuthorImg src={authorImg.type} alt={author} />
        </Author>
      </CardBottom>
    </CardPostContainer>
  );
};

const CardPostContainer = styled.article`
  margin-bottom: 2em;
  border: 1px solid rgba(160, 160, 160, 0.3);
  @media ${({ size }) => size.desktop} {
    &:last-child {
      margin-bottom: 0;
    }
  }
  @media ${({ size }) => size.table} {
    width: calc((100% - 2em) / 2);
    margin-bottom: 0;
  }
  @media ${({ size }) => size.mobile} {
    width: 100%;
    margin-bottom: 2em;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
const CardTop = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
`;

const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em 1.5em;
  padding-bottom: 1.9em;
  background-color: #fff;
`;

const Author = styled.div`
  width: 40px;
  height: 40px;
`;
const AuthorImg = styled.img`
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
`;
export default CardPost;
