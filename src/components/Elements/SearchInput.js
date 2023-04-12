import styled from "styled-components";

import theme from "../styles/theme";

import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";

import { data } from "../../data";
import { useMenuContext } from "../../hooks/menu_context";

// 검색창
const SearchInput = ({ icon }) => {
  const [value, setValue] = useState("");
  const { visibleMenu } = useMenuContext();

  // 영어만 입력되도록 설정
  const handleOnChange = (e) => {
    const regex = /[^A-Za-z]+$/;
    if (regex.test(e.target.value)) {
      return;
    }
    setValue(e.target.value);
  };
  useEffect(() => {
    if (!visibleMenu) {
      setValue("");
    }
  }, [visibleMenu]);

  return (
    <Form>
      <Input
        type="text"
        value={value}
        placeholder="Search"
        id="search-input"
        theme={theme}
        icon={icon}
        onChange={handleOnChange}
      />
      {icon && (
        <Icon theme={theme}>
          <FaSearch />
        </Icon>
      )}
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
  padding-left: ${({ icon }) => (icon ? "44px" : "20px")};
  border: ${({ theme }) => theme.color.border};
  &:focus {
    border-color: ${({ theme }) => theme.color.pointColor};
    outline: 1px solid ${({ theme }) => theme.color.pointColor};
  }
`;
const Icon = styled.i`
  ${({ theme }) => theme.flexBox.flex("row", "center", "center")}
  width: 44px;
  height: 44px;
  position: absolute;
  top: 0;
  left: 0;
`;
export default SearchInput;
