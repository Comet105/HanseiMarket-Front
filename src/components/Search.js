import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getsearch } from "../store/actions/UserAction";
import { useNavigate } from "react-router";

const Search = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = (e, value) => {
    e.preventDefault();
    navigate(`/search/${search}`);

    // dispatch(getsearch(search)).then((res) => {
    //   console.log(search);
    // });
  };

  return (
    <>
      <SearchForm onSubmit={onSubmitHandler}>
        <SearchBox
          value={search}
          type="text"
          placeholder="검색어를 입력해주세요..."
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </SearchForm>
    </>
  );
};

const SearchForm = styled.form``;

const SearchBox = styled.input`
  background-color: #eaeaea;
  color: #444444;
  border: 0;
  border-radius: 4px;
  font-size: 12px;
  margin-left: 5rem;
  width: 15rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  :focus {
    outline: 1px solid gray;
  }
`;

export default Search;
