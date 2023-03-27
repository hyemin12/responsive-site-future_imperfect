import Footer from "./Footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
