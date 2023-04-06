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
import theme from "./styles/theme";

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
    <PostContainer size={theme.device}>
      <TitleContainer size={theme.device}>
        <TitleWrapper size={theme.device}>
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
        <InfoWrapper size={theme.device}>
          <Date d={date} type={"bold"} />
          <Author
            type={"all"}
            name={author}
            src={authorImg.type}
            border={"left"}
          />
        </InfoWrapper>
      </TitleContainer>
      <ImgWrapper size={theme.device}>
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

      <FooterContainer size={theme.device}>
        {isMainPage && <Button text={"continue reading"} path={id} />}
        <FooterRow size={theme.device}>
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
          >
            <Icon icon={<FaHeart />} />
            <p>{isLike.likeCount}</p>
          </FooterItem>
          <FooterItem>
            <Icon icon={<FaComment />} />
            <p>{commentCount}</p>
          </FooterItem>
        </FooterRow>
      </FooterContainer>
    </PostContainer>
  );
};
const Row = styled.div`
  display: flex;
`;
const PostContainer = styled.article`
  width: 100%;
  max-width: 1500px;
  background-color: #fff;
  padding: 3.6em 3em;
  margin-bottom: 2.2em;
  border: 1px solid rgba(160, 160, 160, 0.3);
  overflow-x: hidden;
  &:last-child {
    margin-bottom: 0;
  }
  // @media ${({ size }) => size.tabletPortrait} {
  //   width: calc(100% + 7em);
  //   margin-left: -3.5em;
  // }
`;

const TitleContainer = styled(Row)`
  width: calc(100% + 6em);
  margin-top: -3.6em;
  margin-left: -3em;
  margin-bottom: 1em;
  padding-top: 0;
  border-bottom: 1px solid rgba(160, 160, 160, 0.3);
  @media ${({ size }) => size.tabletPortrait} {
    display: block;
    margin-bottom: 0;
    padding: 3.6em 3em;
    text-align: center;
  }
`;

const TitleWrapper = styled.div`
  flex-grow: 1;
  padding: 3.6em 3em;
  @media ${({ size }) => size.tabletPortrait} {
    padding: 0;
    margin-bottom: 2.4em;
  }
`;
const InfoWrapper = styled(Row)`
  align-items: end;
  justify-content: center;
  flex-direction: column;
  gap: 0.67em;
  padding: 3.6em 3em;
  border-left: 1px solid rgba(160, 160, 160, 0.3);
  flex-shrink: 0;

  // table 세로 스타일
  @media ${({ size }) => size.tabletPortrait} {
    flex-direction: row;
    align-items: center;
    padding: 0;
    border-left: none;
  }
  // 모바일스타일
  @media ${({ size }) => size.mobile} {
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
  @media ${({ size }) => size.mobile} {
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
  @media ${({ size }) => size.mobile} {
    flex-direction: column-reverse;
  }
`;
const FooterRow = styled(Row)`
  @media ${({ size }) => size.mobile} {
    margin-bottom: 2em;
  }
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
