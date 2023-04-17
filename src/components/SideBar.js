import React from "react";
import styled from "styled-components";

import theme from "./styles/theme";

import Intro from "./Intro";
import CardPost from "./CardPost";
import MiniPost from "./MiniPost";
import About from "./About";
import Footer from "./Footer";

import { data } from "../data";

const SideBar = () => {
  const posts = data.sort((a, b) => (a.date < b.date ? 1 : -1));

  const cardPosts = posts.slice(3, 7);
  const popularPosts = data.sort((a, b) => a.like < b.like).slice(0, 5);

  return (
    <div id="side-bar">
      <IntroWrapper theme={theme}>
        <Intro />
      </IntroWrapper>

      <CardPostWrapper theme={theme}>
        {cardPosts.map((post) => (
          <CardPost key={post.id} {...post} />
        ))}
      </CardPostWrapper>

      <SectionWrapper theme={theme}>
        <SectionTitle>Popular Posts</SectionTitle>
        {popularPosts.map((post) => (
          <MiniPost key={post.id} {...post} />
        ))}
      </SectionWrapper>
      <SectionWrapper theme={theme}>
        <SectionTitle> About</SectionTitle>
        <About />
      </SectionWrapper>
      <SectionWrapper theme={theme}>
        <Footer />
      </SectionWrapper>
    </div>
  );
};

const SectionWrapper = styled.div`
  padding-top: 2.5em;
  padding-bottom: 3em;
  border-top: ${({ theme }) => theme.color.border};
`;
const SectionTitle = styled.h4`
  margin-top: 0;
  margin-bottom: 1em;
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;
const IntroWrapper = styled.div`
  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;
const CardPostWrapper = styled(SectionWrapper)`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  margin-top: 2.5em;
  @media ${({ theme }) => theme.device.mobile} {
    display: block;
  }
`;
export default React.memo(SideBar);
