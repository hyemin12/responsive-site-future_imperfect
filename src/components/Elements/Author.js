import { Link } from "react-router-dom";
import styled from "styled-components";

const Author = ({ src, name, type }) => {
  return (
    <Container to="#" onClick={(e) => e.preventDefault}>
      {type === "all" && <AuthorName>{name}</AuthorName>}
      <AuthorImage src={src} alt={`Author ${name}`} />
    </Container>
  );
};
const Container = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
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
    color: #2ebaae;
    text-decoration: none;
  }
`;

const AuthorImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
export default Author;
