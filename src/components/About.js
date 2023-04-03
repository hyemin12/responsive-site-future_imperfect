import styled from "styled-components";
import Button from "./Elements/Button";

const About = () => {
  return (
    <>
      <P>
        Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed
        mattis nunc id lorem euismod amet placerat. Vivamus porttitor magna
        enim, ac accumsan tortor cursus at phasellus sed ultricies.
      </P>
      <Button text={"Learn More"} />
    </>
  );
};
const AboutContainer = styled.div``;
const P = styled.p`
  margin-bottom: 2em;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 0.9em;
  line-height: 1.8;
`;
export default About;
