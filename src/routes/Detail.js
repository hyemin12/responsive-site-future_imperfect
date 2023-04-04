import { useParams } from "react-router-dom";
import styled from "styled-components";

import Layout from "../components/Layout";
import MainPost from "../components/MainPost";
import SideBar from "../components/SideBar";

import { data } from "../data";
import Footer from "../components/Footer";

const Detail = () => {
  const { id } = useParams();
  const post = data.filter((element) => element.id === id * 1)[0];

  return (
    <Layout>
      {post && (
        <Container>
          <MainPost {...post} />
        </Container>
      )}

      <Footer />
    </Layout>
  );
};

const Container = styled.div`
  padding: 3.5em 5em;
`;

export default Detail;
