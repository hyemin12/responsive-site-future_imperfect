import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = () => {
  return (
    <Link>
      <H4>Future imperfect</H4>
    </Link>
  );
};

const H4 = styled.h4`
  font-size: 0.7em;
  letter-spacing: 1.2em;
`;
export default Logo;
