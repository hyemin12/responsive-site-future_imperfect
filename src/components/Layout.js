import styled from "styled-components";

import { useMenuContext } from "../hooks/menu_context";

import Header from "./Header";
import Menu from "./Menu";
import { useEffect } from "react";
import { useRef } from "react";

const Layout = ({ children }) => {
  const { isOpenMenu } = useMenuContext();

  // const menuRef = useRef(null);
  // const menuAnimation = () => {
  //   isOpenMenu && (menuRef.current.style.transform = "translateX(-400px)");
  //   // : (menuRef.current.style.transform = "translateX(0)");
  // };
  // useEffect(() => {
  //   menuAnimation();
  // }, [isOpenMenu]);
  return (
    <div>
      <Header />
      <Main>{children}</Main>
      <Menu />
    </div>
  );
};
const Main = styled.div`
  padding-top: 55px;
`;
export default Layout;
