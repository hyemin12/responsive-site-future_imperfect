import styled from "styled-components";

import theme from "../styles/theme";

import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <Form>
      <Input type="text" placeholder="Search" theme={theme} />
      <Icon theme={theme}>
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
  border: ${({ theme }) => theme.common.border};
  &:focus {
    border-color: ${({ theme }) => theme.common.pointColor};
    outline: 1px solid ${({ theme }) => theme.common.pointColor};
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
