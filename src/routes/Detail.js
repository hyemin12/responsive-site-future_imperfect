import styled from "styled-components";

import Layout from "../components/Layout";
import MainPost from "../components/MainPost";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <Layout>
      <Container>
        <div id="main">상세페이지이이이ㅣ</div>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  display: flex;
`;
export default Home;
