import styled from "styled-components";

import Layout from "../components/Layout";
import MainPost from "../components/MainPost";
import SideBar from "../components/SideBar";
import { data } from "../data";
import theme from "../components/styles/theme";
import Intro from "../components/Intro";

const Home = () => {
  const posts = data.sort((a, b) => (a.date < b.date ? 1 : -1));
  const limit = { main: 3, mini: 4, popular: 5 };

  const mainPosts = posts.slice(0, limit.main);
  const cardPosts = posts.slice(limit.main, limit.main + limit.mini);
  const popularPosts = data
    .sort((a, b) => a.like < b.like)
    .slice(0, limit.popular);

  return (
    <Layout>
      <Container size={theme.device}>
        <IntroWrapper size={theme.device}>
          <Intro />
        </IntroWrapper>
        <Main id="main" size={theme.device}>
          {mainPosts.map((post) => (
            <MainPost key={post.id} {...post} textOverflow={true} />
          ))}
        </Main>
        <SideBar cardPosts={cardPosts} popularPosts={popularPosts} />
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 3.5em 5em;
  gap: 3.5em;
  @media ${({ size }) => size.tablet} {
    display: block;
  }
  @media ${({ size }) => size.tabletPortrait} {
    padding: 3.5em;
  }
`;
const Main = styled.div`
  width: 62vw;
  flex-shrink: 0;
  @media ${({ size }) => size.tablet} {
    width: 100%;
  }
`;
const IntroWrapper = styled.div`
  display: none;
  @media ${({ size }) => size.tablet} {
    display: block;
`;
export default Home;
