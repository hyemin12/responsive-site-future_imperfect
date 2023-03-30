import { Link } from "react-router-dom";
import styled from "styled-components";
import Author from "./Elements/Author";
import Date from "./Elements/Date";
import Title from "./Elements/Title";

const CardPosts = (post) => {
  console.log(post);
  const { title, subtitle, author, authorImg, img, date } = post;
  return (
    <CardPostContainer>
      <CardTop>
        <Img
          src={img.type}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "fill" }}
        />
      </CardTop>
      <CardBottom>
        <div>
          <Title text={title} size={"0.8em"} />
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
const CardTop = styled(Link)`
  display: block;
  width: 100%;
  margin-bottom: -4px;
  overflow: hidden;
`;
const Img = styled.img`
  transition: 0.4s;
  &:hover {
    transform: scale(1.1);
  }
`;
const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.2em;
  padding-bottom: 1.9em;
  background-color: #fff;
`;
export default CardPosts;
