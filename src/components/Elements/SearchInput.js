import styled from "styled-components";

import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <Form>
      <Input type="text" placeholder="Search" />
      <Icon>
        <FaSearch />
      </Icon>
    </Form>
  );
};
const Form = styled.form`
  display: flex;
  height: 44px;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  background-color: rgb(244, 244, 244);
  padding-left: 44px;
  border: 1px solid rgba(160, 160, 160, 0.3);
  &:focus {
    border-color: #2ebaae;
    outline: 1px solid #2ebaae;
  }
`;
const Icon = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  position: absolute;
  top: 0;
  left: 0;
`;
export default SearchInput;
