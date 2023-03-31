import styled from "styled-components";

import Intro from "./Intro";
import CardPost from "./CardPost";
import MiniPost from "./MiniPost";
import About from "./About";
import Footer from "./Footer";

const SideBar = ({ cardPosts, popularPosts }) => {
  return (
    <div>
      <Intro />
      <SectionWrapper>
        {cardPosts.map((post) => (
          <CardPost key={post.id} {...post} />
        ))}
      </SectionWrapper>
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
`;
export default SideBar;
