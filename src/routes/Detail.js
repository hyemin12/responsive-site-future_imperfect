import { useParams } from "react-router-dom";
import styled from "styled-components";

import Layout from "../components/Layout";
import MainPost from "../components/MainPost";
import SideBar from "../components/SideBar";

import { data } from "../data";

const Detail = () => {
  const { id } = useParams();
  const post = data.filter((element) => element.id === id * 1)[0];
  console.log(id, data, post, typeof id);

  return (
    <Layout>
      {post && (
        <Container>
          <MainPost {...post} />
        </Container>
      )}
    </Layout>
  );
};

const Container = styled.div`
  // width: 90vw;
  padding: 3.5em 5em;
`;
const PostWrapper = styled.div``;
export default Detail;
