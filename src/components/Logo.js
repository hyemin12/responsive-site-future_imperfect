import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = () => {
  return (
    <Link to="/">
      <H4>Future imperfect</H4>
    </Link>
  );
};

const H4 = styled.h4`
  color: #3c3b3b;
  font-size: 0.7em;
  letter-spacing: 0.3em;
  text-transform: uppercase;
`;
export default Logo;
