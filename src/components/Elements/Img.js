import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Img = ({ src, path, alt }) => {
  const location = useLocation();
  if (location.pathname === "/")
    return (
      <LinkWrapper to={`post/:${path}`} style={{ display: "block" }}>
        <ImgTag src={src} alt={alt} />
      </LinkWrapper>
    );
  return <ImgTag src={src} alt={alt} />;
};
const LinkWrapper = styled(Link)`
  flex-grow: 1;
  display: "block";
`;
const ImgTag = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.4s;
  &:hover {
    transform: scale(1.1);
  }
`;

export default Img;
