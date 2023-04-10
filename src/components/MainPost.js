import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import theme from "./styles/theme";

import Title from "./Elements/Title";
import SubTitle from "./Elements/SubTitle";
import Author from "./Elements/Author";
import Date from "./Elements/Date";
import Icon from "./Elements/Icon";
import Button from "./Elements/Button";
import TextLink from "./Elements/TextLink";
import Img from "./Elements/Img";

import { FaHeart, FaComment } from "react-icons/fa";

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
    <PostContainer theme={theme}>
      <Header theme={theme}>
        <TitleWrapper theme={theme}>
          <Title
            type={isMainPage ? "link" : "default"}
            text={title}
            size={"1.6em"}
            weight={900}
            path={id}
          />
          <SubTitle text={subtitle} />
        </TitleWrapper>

        {/* 날짜, 작가 */}
        <InfoWrapper theme={theme}>
          <Date d={date} type={"bold"} />
          <Author
            type={"all"}
            name={author}
            src={authorImg.type}
            border={"left"}
          />
        </InfoWrapper>
      </Header>
      <ImgWrapper theme={theme}>
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

      <FooterContainer theme={theme}>
        {isMainPage && <Button text={"continue reading"} path={id} />}
        <FooterRow theme={theme}>
          <TextLink
            text={tag}
            path="#"
            type="link"
            size={"0.65em"}
            padding={"0 2em 0 0"}
            offset={3}
          />
          <FooterItem
            className={isLike.mode ? "active" : ""}
            onClick={toggleLikeMode}
            theme={theme}
          >
            <Icon icon={<FaHeart />} />
            <p>{isLike.likeCount}</p>
          </FooterItem>
          <FooterItem theme={theme}>
            <Icon icon={<FaComment />} />
            <p>{commentCount}</p>
          </FooterItem>
        </FooterRow>
      </FooterContainer>
    </PostContainer>
  );
};
const PostContainer = styled.article`
  width: 100%;
  max-width: 1500px;
  background-color: #fff;
  padding: 3.6em 3em;
  margin-bottom: 2.2em;
  border: ${({ theme }) => theme.color.border};
  overflow-x: hidden;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Header = styled.div`
  display: flex;
  width: calc(100% + 6em);
  margin-top: -3.6em;
  margin-left: -3em;
  margin-bottom: 1em;
  padding-top: 0;
  border-bottom: ${({ theme }) => theme.color.border};
  @media ${({ theme }) => theme.device.tabletPortrait} {
    display: block;
    margin-bottom: 0;
    padding: 3.6em 3em;
    text-align: center;
  }
`;

const TitleWrapper = styled.div`
  flex-grow: 1;
  padding: 3.6em 3em;
  @media ${({ theme }) => theme.device.tabletPortrait} {
    padding: 0;
    margin-bottom: 2.4em;
  }
`;
const InfoWrapper = styled.div`
  ${({ theme }) => theme.flexBox.flex("column", "end", "center")}
  flex-shrink: 0;
  gap: 0.67em;
  padding: 3.6em 3em;
  border-left: ${({ theme }) => theme.color.border};

  // table 세로 스타일
  @media ${({ theme }) => theme.device.tabletPortrait} {
    flex-direction: row;
    align-items: center;
    padding: 0;
    border-left: none;
  }
  // 모바일스타일
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`;
const ImgWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 3em 0;
  aspect-ratio: 841/341;
  overflow: hidden;
  @media ${({ theme }) => theme.device.mobile} {
    width: calc(100% + 7em);
    margin-top: 0;
    margin-bottom: 2em;
    margin-left: -3.5em;
  }
`;
const TextWrapper = styled.div`
  width: 100%;
  margin-bottom: 2.4em;
  line-height: 1.8;
  font-family: "Source Sans Pro", "sans-serif";

  // 본문 줄임
  ${({ textOverflow }) =>
    textOverflow &&
    `display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;`}
`;
const FooterContainer = styled.div`
  ${({ theme }) => theme.flexBox.flex("row", "center", "space-between")}
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column-reverse;
  }
`;
const FooterRow = styled.div`
  display: flex;
  @media ${({ theme }) => theme.device.mobile} {
    margin-bottom: 2em;
  }
`;
const FooterItem = styled.div`
  ${({ theme }) => theme.flexBox.flex()}
  gap: 10px;
  font-size: 0.65em;
  padding: 0 2em;
  border-left: ${({ theme }) => theme.color.border};
  cursor: pointer;
  &:hover,
  &:hover svg,
  &.active,
  &.active svg {
    color: ${({ theme }) => theme.color.pointColor};
    fill: ${({ theme }) => theme.color.pointColor};
  }
`;

export default MainPost;
