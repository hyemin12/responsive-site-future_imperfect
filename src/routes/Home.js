import { useState, useEffect } from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import MainPost from "../components/MainPost";
import { data } from "../data";
import theme from "../components/styles/theme";
import Intro from "../components/Intro";
import { BtnStyle } from "../components/Elements/Button";

const Home = () => {
  const sortedPosts = data.sort((a, b) => (a.date < b.date ? 1 : -1));

  const limit = 3;
  const totalPage = Math.floor(data.length / limit);

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePrevButton = () => {
    if (currentPage === 0) return;
    setCurrentPage(currentPage - 1);
  };

  const handleNextButton = () => {
    if (currentPage === totalPage - 1) return;

    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    setPosts(sortedPosts.slice(currentPage * limit, (currentPage + 1) * limit));
  }, [currentPage]);

  return (
    <Layout sidebar={"sidebar"}>
      <IntroWrapper theme={theme}>
        <Intro />
      </IntroWrapper>
      {posts &&
        posts.map((post) => (
          <MainPost key={post.id} {...post} textOverflow={true} />
        ))}
      <ButtonRow theme={theme}>
        <Button onClick={handlePrevButton} block={currentPage === 0}>
          Previous Page
        </Button>
        <Button
          onClick={handleNextButton}
          block={currentPage === totalPage - 1}
        >
          Next Page
        </Button>
      </ButtonRow>
    </Layout>
  );
};

const IntroWrapper = styled.div`
  display: none;
  @media ${({ theme }) => theme.device.tablet} {
    display: block;
    padding-top:55px;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 1em;
`;

const Button = styled.button`
  ${BtnStyle}
  ${({ block }) =>
    block &&
    ` color: rgba(160,160,160,0.3);
      cursor:inherit;
  &:hover {
    color: rgba(160,160,160,0.3);
    border-color: rgba(160,160,160,0.3);
  }`}
`;
export default Home;
