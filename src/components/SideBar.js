import Intro from "./Intro";
import MiniPost from "./CardPosts";
import styled from "styled-components";

const SideBar = ({ cardPosts, popularPosts }) => {
  return (
    <div>
      <Intro />
      <CardPostContainer>
        {cardPosts.map((post) => (
          <MiniPost key={post.id} {...post} />
        ))}
      </CardPostContainer>
    </div>
  );
};
const CardPostContainer = styled.article`
  padding: 3em 0;
  border-top: 1px solid rgba(160, 160, 160, 0.3);
  border-bottom: 1px solid rgba(160, 160, 160, 0.3);
`;
export default SideBar;
