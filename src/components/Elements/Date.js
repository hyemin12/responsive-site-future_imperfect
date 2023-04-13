import moment from "moment";
import styled from "styled-components";
import theme from "../styles/theme";

const Date = ({ d, type }) => {
  return (
    <P type={type} theme={theme}>
      {moment(d).format("LL")}
    </P>
  );
};

const P = styled.p`
  flex-shrink: 0;
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
      `};
  @media ${({ theme }) => theme.device.tabletPortrait} {
    padding-right: 1em;
  }
`;

export default Date;
