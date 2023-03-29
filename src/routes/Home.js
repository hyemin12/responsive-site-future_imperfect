import styled from "styled-components";

import Layout from "../components/Layout";
import MainPost from "../components/MainPost";
import SideBar from "../components/SideBar";
import { data } from "../data";

const Home = () => {
  // console.log(Date.now());
  const posts = data;
  const limit = { main: 3, mini: 4, popular: 5 };

  const mainPosts = data.slice(0, limit.main);
  const miniPosts = data.slice(limit.main, limit.main + limit.mini);
  const popularPosts = data
    .sort((a, b) => (a.like < b.like ? 1 : -1))
    .slice(0, limit.popular);
  // console.log(posts, mainPosts, miniPosts, popularPosts);
  return (
    <Layout>
      <Container>
        <div id="main">
          {mainPosts.map((post) => (
            <MainPost key={post.id} {...post} />
          ))}
          <MainPost />
        </div>
        <SideBar />
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  display: flex;
`;
export default Home;
