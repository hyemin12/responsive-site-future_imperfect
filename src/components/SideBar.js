import styled from "styled-components";

import Intro from "./Intro";
import CardPost from "./CardPost";
import MiniPost from "./MiniPost";

const SideBar = ({ cardPosts, popularPosts }) => {
  return (
    <div>
      <Intro />
      <CardPostContainer>
        {cardPosts.map((post) => (
          <CardPost key={post.id} {...post} />
        ))}
      </CardPostContainer>
      <h4>Popular Posts</h4>
      {popularPosts.map((post) => (
        <MiniPost key={post.id} {...post} />
      ))}
    </div>
  );
};
const CardPostContainer = styled.article`
  padding: 3em 0;
  border-top: 1px solid rgba(160, 160, 160, 0.3);
  border-bottom: 1px solid rgba(160, 160, 160, 0.3);
`;
export default SideBar;
