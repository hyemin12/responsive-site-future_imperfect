import styled from "styled-components";

import Layout from "../components/Layout";
import MainPost from "../components/MainPost";
import { data } from "../data";
import theme from "../components/styles/theme";
import Intro from "../components/Intro";
import Button from "../components/Elements/Button";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const sortedPosts = data.sort((a, b) => (a.date < b.date ? 1 : -1));

  const limit = 3;

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const mainPosts = sortedPosts.slice(0, limit);
  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  // console.log(currentPage);
  useEffect(() => {
    // console.log(currentPage * limit, (currentPage + 1) * limit);
    setPosts(sortedPosts.slice(currentPage * limit, (currentPage + 1) * limit));
  }, [currentPage]);

  console.log(posts);

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
        <Button
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
          text={"Previous Page"}
        />
        <Button onClick={handleNext} text={"Next Page"} />
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
const PrevButton = styled(Button)``;
export default Home;
