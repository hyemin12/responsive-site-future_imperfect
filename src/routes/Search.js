import { useParams } from "react-router-dom";

import styled from "styled-components";

import { useSearchContext } from "../hooks/search_context";
import theme from "../components/styles/theme";

import Layout from "../components/Layout";
import SearchResPost from "../components/SearchResPost";

import { data } from "../data";

const Search = () => {
  const { param } = useParams();
  const { searchResult } = useSearchContext();
  let { text, result } = searchResult;
  console.log(searchResult);

  // 뒤로가기해서 해당 페이지에 들어와서 result 값이 없을 때 값 다시 가져오기
  result =
    result.length === 0
      ? data.filter((post) =>
          post.title.toUpperCase().includes(param.toUpperCase())
        )
      : result;

  return (
    <Layout sidebar={"sidebar"}>
      {result && (
        <>
          <h2>
            {`${result.length} Search Result for  `}
            <Span theme={theme}>"{text ? text : param}"</Span>
          </h2>

          <PostWrapper className="post-wrapper">
            {result.map((post) => (
              <SearchResPost key={post.id} {...post} />
            ))}
          </PostWrapper>
        </>
      )}
    </Layout>
  );
};

const Span = styled.span`
  color: ${({ theme }) => theme.color.pointColor};
`;
const PostWrapper = styled.div``;
export default Search;
