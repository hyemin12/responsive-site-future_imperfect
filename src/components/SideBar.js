import styled from "styled-components";

import Intro from "./Intro";
import CardPost from "./CardPost";
import MiniPost from "./MiniPost";
import About from "./About";
import Footer from "./Footer";
import theme from "./styles/theme";

const SideBar = ({ cardPosts, popularPosts }) => {
  return (
    <div>
      <IntroWrapper size={theme.device}>
        <Intro />
      </IntroWrapper>

      <CardPostWrapper size={theme.device}>
        {cardPosts.map((post) => (
          <CardPost key={post.id} {...post} />
        ))}
      </CardPostWrapper>

      <SectionWrapper>
        <SectionTitle>Popular Posts</SectionTitle>
        {popularPosts.map((post) => (
          <MiniPost key={post.id} {...post} />
        ))}
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle> About</SectionTitle>
        <About />
      </SectionWrapper>
      <SectionWrapper>
        <Footer />
      </SectionWrapper>
    </div>
  );
};

const SectionWrapper = styled.div`
  padding-top: 2.5em;
  padding-bottom: 3em;
  ${({ borderBottom }) =>
    borderBottom && "border-bottom: 1px solid rgba(160, 160, 160, 0.3)"};

  border-top: 1px solid rgba(160, 160, 160, 0.3);
`;
const SectionTitle = styled.h4`
  margin-top: 0;
  margin-bottom: 1em;
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;
const IntroWrapper = styled.div`
  @media ${({ size }) => size.tablet} {
    display: none;
  }
`;
const CardPostWrapper = styled(SectionWrapper)`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  margin-top: 2.5em;
  @media ${({ size }) => size.mobile} {
    display: block;
  }
`;
export default SideBar;
