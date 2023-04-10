import { Link } from "react-router-dom";
import styled from "styled-components";

import LogoImg from "../../image/logo.jpg";

// 육각형 모양 로고
const Logo = () => {
  return (
    <LogoShape to="/">
      <img src={LogoImg} alt="Future imperfect" />
    </LogoShape>
  );
};

const LogoShape = styled(Link)`
display: flex;
width: 65px;
height: 70px;
-webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}
position: relative;
 
`;

export default Logo;
