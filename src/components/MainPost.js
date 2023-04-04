import { useState } from "react";
import styled from "styled-components";

import Title from "./Elements/Title";
import SubTitle from "./Elements/SubTitle";
import Author from "./Elements/Author";
import Date from "./Elements/Date";
import Icon from "./Elements/Icon";
import Button from "./Elements/Button";
import TextLink from "./Elements/TextLink";
import Img from "./Elements/Img";

import { FaHeart, FaComment } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const MainPost = (post) => {
  const location = useLocation();
  const isMainPage = location.pathname === "/";

  const [isLike, setIsLike] = useState({
    likeCount: post.likeCount,
    mode: false,
  });

  const {
    id,
    title,
    subtitle,
    img,
    text,
    author,
    authorImg,
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
          <Title
            type={"link"}
            text={title}
            size={"1.6em"}
            weight={900}
            path={id}
          />
          <SubTitle text={subtitle} />
        </TitleWrapper>

        {/* 날짜, 작가 */}
        <InfoWrapper>
          <Date d={date} type={"bold"} />
          <Author type={"all"} name={author} src={authorImg.type} />
        </InfoWrapper>
      </TitleContainer>
      <ImgWrapper>
        <Img src={img.type} alt={title} path={id} />
      </ImgWrapper>

      {/* 본문 */}

      <TextWrapper textOverflow={textOverflow}>
        {isMainPage ? (
          <p>{text.split("\n")[0]}</p>
        ) : (
          text.split("\n").map((param, idx) => (
            <>
              <p key={idx}>{param}</p>
              {idx !== text.split("\n").length - 1 ? (
                <br key={"br" - idx} />
              ) : null}
            </>
          ))
        )}
      </TextWrapper>

      <FooterContainer>
        {isMainPage && <Button text={"continue reading"} path={id} />}

        <Row>
          <TextLink
            text={tag}
            path="#"
            type="link"
            size={"0.65em"}
            padding={"0 2em 0 0"}
          />
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
const PostContainer = styled.article`
  max-width: 1500px;
  background-color: #fff;
  padding: 3.6em 3em;
  margin-bottom: 2.2em;
  border: 1px solid rgba(160, 160, 160, 0.3);
  &:last-child {
    margin-bottom: 0;
  }
`;
const TitleContainer = styled(Row)`
  width: calc(100% + 6em);
  margin-top: -3.6em;
  margin-left: -3em;
  margin-bottom: 1em;
  padding-top: 0;
  border-bottom: 1px solid rgba(160, 160, 160, 0.3);
`;
const TitleWrapper = styled.div`
  flex-grow: 1;
  padding: 3.6em 3em;
`;
const InfoWrapper = styled(Row)`
  align-items: end;
  justify-content: center;
  flex-direction: column;
  gap: 0.67em;
  padding: 3.6em 3em;
  border-left: 1px solid rgba(160, 160, 160, 0.3);
  flex-shrink: 0;
`;
const ImgWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 3em 0;
  aspect-ratio: 841/341;
  overflow: hidden;
`;
const TextWrapper = styled.div`
  width: 100%;
  margin-bottom: 2.4em;
  line-height: 1.8;
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
  border-left: 1px solid rgba(160, 160, 160, 0.3);
  cursor: pointer;
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

export default MainPost;
