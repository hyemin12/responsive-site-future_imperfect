import styled from "styled-components";

import Layout from "../components/Layout";
import MainPost from "../components/MainPost";
import { data } from "../data";
import theme from "../components/styles/theme";
import Intro from "../components/Intro";

const Home = () => {
  const posts = data.sort((a, b) => (a.date < b.date ? 1 : -1));
  const mainPosts = posts.slice(0, 3);

  return (
    <Layout sidebar={"sidebar"}>
      <IntroWrapper theme={theme}>
        <Intro />
      </IntroWrapper>
      {mainPosts.map((post) => (
        <MainPost key={post.id} {...post} textOverflow={true} />
      ))}
    </Layout>
  );
};

const IntroWrapper = styled.div`
  display: none;
  @media ${({ theme }) => theme.device.tablet} {
    display: block;
    padding-top:55px;
`;
export default Home;
