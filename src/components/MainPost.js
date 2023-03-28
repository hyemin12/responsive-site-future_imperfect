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

const MainPost = () => {
  const [likeCount, setLikeCount] = useState();

  return (
    <PostContainer>
      <TitleContainer>
        <TitleWrapper>
          <Title type={"link"} text={"MAGNA SED ADIPISCING"} size={"1.5em"} />
          <SubTitle
            text={"LOREM IPSUM DOLOR AMET NULLAM CONSEQUAT ETIAM FEUGIAT"}
          />
        </TitleWrapper>
        <InfoWrapper>
          <Date>NOVEMBER 1, 2015</Date>
          <Author name={"JANE DOE"} src={AuthorImg} />
        </InfoWrapper>
      </TitleContainer>

      <Img src={contentImg} alt="Jane" />
      <FooterContainer>
        <Button text={"continue reading"} />
        <Row>
          <Tag>태그</Tag>
          <FooterItem>
            <Icon icon={<FaHeart />} />
          </FooterItem>
          <FooterItem>
            <Icon icon={<FaComment />} />
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
`;
const TitleContainer = styled(Row)`
  padding: 2.5em 2.2em;
  border-bottom: 1px solid rgba(160, 160, 160, 0.3);
`;
const TitleWrapper = styled.div`
  flex-grow: 1;
`;
const InfoWrapper = styled(Row)`
  align-items: end;
  flex-direction: column;
  width: 30%;
  flex-shrink: 0;
`;
const Date = styled.p`
  color: #3c3b3b;
  font-size: 0.8em;
  font-weight: 800;
  letter-spacing: 0.2em;
`;
const Img = styled.img`
  padding: 2em 2.2em;
  transition: 0.4s;
  overflow: hidden;
  &:hover {
    overflow: hidden;
    transform: scale(1.1);
  }
`;
const FooterContainer = styled(Row)`
  align-items: center;
  justify-content: space-between;
  padding: 2em 2.2em;
`;

const FooterItem = styled.div`
  font-size: 0.65em;
  padding: 0 2em;
  border-right: 1px solid rgba(160, 160, 160, 0.3);
  &:last-child {
    border: none;
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
