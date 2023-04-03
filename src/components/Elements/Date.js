import moment from "moment";
import styled from "styled-components";

const Date = ({ d, type }) => {
  return <P type={type}>{moment(d).format("LL")}</P>;
};

const P = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.2em;
  ${({ type }) =>
    type === "bold"
      ? `color: #3c3b3b;
font-size: 0.8em;
font-weight: 800;
`
      : `
      color: rgb(100, 100, 100);
font-size: 0.65em;
font-weight: 400;
      `}
`;

export default Date;
