import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../styles/theme";

const Author = ({ src, name, type, border }) => {
  return (
    <Container
      to="#"
      onClick={(e) => e.preventDefault}
      theme={theme}
      border={border}
    >
      {type === "all" && <AuthorName theme={theme}>{name}</AuthorName>}
      <AuthorImage src={src} alt={`Author ${name}`} />
    </Container>
  );
};
const Container = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  @media ${({ theme }) => theme.device.tabletPortrait} {
    ${({ border }) => border === "left"} {
      flex-direction: row-reverse;
      padding-left: 1.2em;
      border-left: ${({ theme }) => theme.common.border};
    }
  }
  @media ${({ theme }) => theme.device.mobile} {
    display: block;
    border-left: none;
  }
`;
const AuthorName = styled.p`
  color: #646463;
  font-size: 0.65em;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-decoration: underline dotted #aaa;
  text-underline-offset: 5px;
  transition: 0.4s;
  &:hover {
    color: ${({ theme }) => theme.common.pointColor};
    text-decoration: none;
  }
  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;

const AuthorImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
export default Author;
