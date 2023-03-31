import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Main>{children}</Main>
    </div>
  );
};
const Main = styled.div`
  padding-top: 55px;
`;
export default Layout;
