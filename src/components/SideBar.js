import styled from "styled-components";

import theme from "./styles/theme";

import Intro from "./Intro";
import CardPost from "./CardPost";
import MiniPost from "./MiniPost";
import About from "./About";
import Footer from "./Footer";

const SideBar = ({ cardPosts, popularPosts }) => {
  return (
    <div>
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
  border-top: ${({ theme }) => theme.common.border};
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
export default SideBar;
