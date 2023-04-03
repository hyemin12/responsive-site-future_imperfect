import styled from "styled-components";
import Button from "./Elements/Button";
import SearchInput from "./Elements/SearchInput";

const Menu = () => {
  return (
    <Container>
      <MenuContainer>
        <Section>
          <SearchInput />
        </Section>
        <Section></Section>
        <Section>
          <Button text={"log in"} width={"100%"} />
        </Section>
      </MenuContainer>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(244, 244, 244, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;
const MenuContainer = styled.div`
  width: 400px;
  height: 100vh;
  background-color: #fff;
  border-left: 1px solid rgba(160, 160, 160, 0.3);
  position: absolute;
  top: 0;
  right: 0;
`;
const Section = styled.div`
  padding: 3em 3.5em;
  border-bottom: 1px solid rgba(160, 160, 160, 0.3);
  &:last-child {
    border: none;
  }
`;
export default Menu;
