import { Link } from "react-router-dom";
import styled from "styled-components";

// 정사각형 이미지
const ImgSquare = ({ id, title, img, width }) => {
  return (
    <ImgWrapper to={`./post/${id}`} width={width}>
      <Img src={img.type} alt={title} />
    </ImgWrapper>
  );
};
const ImgWrapper = styled(Link)`
  display: flex;
  flex-shrink: 0;
  width: ${({ width }) => width};
  height: ${({ width }) => width};
  overflow: hidden;
  position: relative;
`;
const Img = styled.img`
  display: block;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default ImgSquare;
