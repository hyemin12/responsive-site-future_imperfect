import { useParams } from "react-router-dom";

import Layout from "../components/Layout";
import MainPost from "../components/MainPost";

import { data } from "../data";

// 포스트 페이지
const Detail = () => {
  const { id } = useParams();
  const post = data.filter((element) => element.id === id * 1)[0];

  return (
    <Layout>
      <>{post && <MainPost {...post} />}</>
    </Layout>
  );
};

export default Detail;
