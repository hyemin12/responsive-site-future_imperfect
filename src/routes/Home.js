import styled from "styled-components";

import Layout from "../components/Layout";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <Layout>
      <Container>
        <div id="main"></div>
        <SideBar />
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  display: flex;
`;
export default Home;
