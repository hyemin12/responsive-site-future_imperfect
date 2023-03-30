import styled from "styled-components";
import Logo from "./Elements/Logo";

import TextLink from "./Elements/TextLink";
import Title from "./Elements/Title";

const Intro = () => {
  return (
    <IntroContainer>
      <Logo />

      <Title
        text={"FUTURE IMPERFECT"}
        size={"2em"}
        weight={900}
        lineHeight={1.8}
      />

      <div>
        <P>ANOTHER FINE RESPONSIVE SITE TEMPLATE BY</P>
        <TextLink
          path="https://html5up.net/"
          text={"HTML5 UP"}
          size={"0.8em"}
          padding={"0 1em"}
        />
      </div>
    </IntroContainer>
  );
};
const IntroContainer = styled.div`
  margin-bottom: 3em;
`;
const P = styled.p`
  display: inline;
  font-size: 0.8em;
  line-height: 2.4;
  letter-spacing: 0.3em;
`;
export default Intro;
