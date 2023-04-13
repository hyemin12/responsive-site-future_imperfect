import styled from "styled-components";

import theme from "./styles/theme";

import ImgSquare from "./Elements/ImgSquare";
import Title from "./Elements/Title";
import Date from "./Elements/Date";

const SearchResPost = (post) => {
  const { id, img, title, text, date } = post;

  return (
    <Article theme={theme}>
      <ImgSquare id={id} title={title} img={img} width={"6em"} />
      <TextWrapper className="text-wrapper" theme={theme}>
        <div>
          <Title
            text={title}
            path={`../post/${id}`}
            type={"link"}
            size={"1em"}
            short={2}
          />
          <P theme={theme}>{text}</P>
        </div>
        <p></p>
        <Date d={date} />
      </TextWrapper>
    </Article>
  );
};

const Article = styled.article`
  ${({ theme }) => theme.flexBox.flex("row", "start", "start")}
  margin: 2em 0;
  &:last-child {
    margin-bottom: 0;
  }
`;
const TextWrapper = styled.div`
  ${({ theme }) => theme.flexBox.flex("row", "start", "space-between")}
  gap: 1.5em;
  flex-grow: 1;
  padding: 1em;
  @media ${({ theme }) => theme.device.tabletPortrait} {
    display: block;
    padding: 0 1em;
  }
`;
const P = styled.p`
  ${({ theme }) => theme.text.overflow(2)}
  font-size: 0.8em;
  line-height: 1.6;
  @media ${({ theme }) => theme.device.tabletPortrait} {
    display: none;
  }
`;
export default SearchResPost;
