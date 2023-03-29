import { useState } from "react";
import styled from "styled-components";

import Title from "./Elements/Title";
import SubTitle from "./Elements/SubTitle";
import Author from "./Elements/Author";
import Button from "./Elements/Button";
import Icon from "./Elements/Icon";

import AuthorImg from "../image/avatar.jpg";
import contentImg from "../image/pic01.jpg";

import { FaHeart, FaComment } from "react-icons/fa";
import moment from "moment/moment";

const MainPost = (post) => {
  const [isLike, setIsLike] = useState({
    likeCount: post.likeCount,
    mode: false,
  });

  const {
    title,
    subtitle,
    text,
    author,
    date,
    tag,
    commentCount,
    textOverflow,
  } = post;

  const toggleLikeMode = () => {
    const { likeCount, mode } = isLike;
    mode
      ? setIsLike({ likeCount: likeCount - 1, mode: false })
      : setIsLike({ likeCount: likeCount + 1, mode: true });
  };

  return (
    <PostContainer>
      <TitleContainer>
        <TitleWrapper>
          <Title type={"link"} text={title} size={"1.5em"} />
          <SubTitle text={subtitle} />
        </TitleWrapper>
        <InfoWrapper>
          <Date>{moment(date).format("LL")}</Date>
          <Author name={author} src={AuthorImg} />
        </InfoWrapper>
      </TitleContainer>
      <ImgWrapper>
        <Img src={contentImg} alt="Jane" />
      </ImgWrapper>

      <TextWrapper textOverflow={textOverflow}>
        {text.split("\n").map((par, idx) => (
          <p key={idx}>{par}</p>
        ))}
      </TextWrapper>
      <FooterContainer>
        <Button text={"continue reading"} />
        <Row>
          <Tag>{tag}</Tag>
          <FooterItem
            className={isLike.mode ? "active" : ""}
            onClick={toggleLikeMode}
          >
            <Icon icon={<FaHeart />} />
            <p>{isLike.likeCount}</p>
          </FooterItem>
          <FooterItem>
            <Icon icon={<FaComment />} />
            <p>{commentCount}</p>
          </FooterItem>
        </Row>
      </FooterContainer>
    </PostContainer>
  );
};
const Row = styled.div`
  display: flex;
`;
const PostContainer = styled.div`
  background-color: #fff;
  padding: 2.5em 2.2em;
  margin-bottom: 2.2em;
`;
const TitleContainer = styled(Row)`
  width: calc(100% + 4.4em);
  margin-top: -2.5em;
  margin-left: -2.2em;
  padding-top: 0;
  border-bottom: 1px solid rgba(160, 160, 160, 0.3);
`;
const TitleWrapper = styled.div`
  flex-grow: 1;
  padding: 2.5em 2.2em;
`;
const InfoWrapper = styled(Row)`
  align-items: end;
  justify-content: center;
  flex-direction: column;
  width: 30%;
  padding-right: 2.2em;
  border-left: 1px solid rgba(160, 160, 160, 0.3);
  flex-shrink: 0;
`;
const Date = styled.p`
  color: #3c3b3b;
  font-size: 0.8em;
  font-weight: 800;
  letter-spacing: 0.2em;
  text-transform: uppercase;
`;
const ImgWrapper = styled.div`
  width: 100%;
  margin: 2em 0;
  aspect-ratio: 841/341;
  overflow: hidden;
`;
const Img = styled.img`
  transition: 0.4s;
  &:hover {
    transform: scale(1.1);
  }
`;
const TextWrapper = styled.div`
  width: 100%;
  margin-bottom: 2.4em;
  font-family: "Source Sans Pro", "sans-serif";
  ${({ textOverflow }) =>
    textOverflow &&
    `display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;`}
`;
const FooterContainer = styled(Row)`
  align-items: center;
  justify-content: space-between;
`;
const FooterItem = styled(Row)`
  align-items: center;
  gap: 10px;
  font-size: 0.65em;
  padding: 0 2em;
  border-right: 1px solid rgba(160, 160, 160, 0.3);
  cursor: pointer;
  &:last-child {
    border: none;
  }
  &:hover,
  &:hover svg {
    color: #2ebaae;
    fill: #2ebaae;
  }
  &.active,
  &.active svg {
    color: #2ebaae;
    fill: #2ebaae;
  }
`;
const Tag = styled(FooterItem)`
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-decoration: underline dotted #aaa;
  text-underline-offset: 5px;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    text-decoration: none;
  }
`;

export default MainPost;
