import { Link } from "react-router-dom";
import styled from "styled-components";
import Author from "./Elements/Author";
import Date from "./Elements/Date";
import Img from "./Elements/Img";
import Title from "./Elements/Title";

const CardPosts = (post) => {
  console.log(post);
  const { id, title, subtitle, author, authorImg, img, date } = post;
  return (
    <CardPostContainer>
      <CardTop>
        <Img src={img.type} alt={title} path={id} />
      </CardTop>
      <CardBottom>
        <div>
          <Title text={title} size={"0.8em"} path={id} />
          <Date d={date} />
        </div>
        <Author src={authorImg.type} />
      </CardBottom>
    </CardPostContainer>
  );
};

const CardPostContainer = styled.article`
  margin-bottom: 2em;
  border: 1px solid rgba(160, 160, 160, 0.3);
  &:last-child {
    margin-bottom: 0;
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
export default CardPosts;
