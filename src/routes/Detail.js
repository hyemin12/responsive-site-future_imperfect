import { useParams } from "react-router-dom";
import styled from "styled-components";

import Layout from "../components/Layout";
import Footer from "../components/Footer";
import MainPost from "../components/MainPost";

import { data } from "../data";
import theme from "../components/styles/theme";

const Detail = () => {
  const { id } = useParams();
  const post = data.filter((element) => element.id === id * 1)[0];

  return (
    <Layout>
      {post && (
        <Container theme={theme}>
          <MainPost {...post} />
        </Container>
      )}

      <Footer />
    </Layout>
  );
};

const Container = styled.div`
  padding: 3.5em 5em;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 3.5em;
  }
  @media ${({ theme }) => theme.device.tabletPortrait} {
    padding: 3.5em 0;
  }
`;

export default Detail;
