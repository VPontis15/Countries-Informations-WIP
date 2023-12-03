import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLightMode } from "../features/layout/Layout";

const Container = styled.div`
  width: 100%;
  max-width: min(85%, 1440px);
  display: flex;
  margin-inline: auto;
  padding-inline: 1em;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.25rem;
  color: inherit;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    gap: 2em;
  }
`;

const SearchCountry = styled.input`
  display: block;
  max-width: 100%;
  border: 1px solid
    ${(props) =>
      !props.isLightMode ? "var(--light-mode-bg)" : "var(--dark-mode-bg)"};
  width: 450px;
  height: 50px;
  padding: 1em;
  font-size: 1.125rem;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.1);
  font-family: inherit;
  color: ${(props) => (props.isLightMode ? "var(--light-mode-text)" : "white")};
  background-color: ${(props) =>
    props.isLightMode ? "var(--light-mode-bg)" : "var(--dark-mode-bg)"};
  &:focus {
    outline: 1px solid
      ${(props) =>
        !props.isLightMode ? "var(--light-mode-bg)" : "var(--dark-mode-bg)"};
  }
  &::placeholder {
    color: ${(props) =>
      props.isLightMode ? "var(--light-mode-text)" : "white"};
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const FilterSelect = styled.select`
  padding: 1em 2.5em 1em 1em;
  height: 50px;
  outline: 1px solid
    ${(props) =>
      !props.isLightMode ? "var(--light-mode-bg)" : "var(--dark-mode-bg)"};
  color: ${(props) => (props.isLightMode ? "var(--light-mode-text)" : "white")};
  background-color: ${(props) =>
    props.isLightMode ? "var(--light-mode-bg)" : "var(--dark-mode-bg)"};
  border: none;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.1);
  font-family: inherit;
  cursor: pointer;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const FilterOption = styled.option`
  background: none;
  border: none;
  font-family: inherit;
  font-size: 1rem;
  cursor: pointer;
`;

const ClearBtn = styled.button`
  background: none;
  border: none;
  font-size: 0.9375rem;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.5s ease;
`;

const FilterDiv = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  gap: 0.75em;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

function Input({
  handleSearchByRegion,
  searchByRegion,
  searchByInput,
  handleSearchByInput,
  setQueryOption,
  setSearchByInput,
  setSearchByRegion,
}) {
  const { isLightMode } = useLightMode();

  function handleClearBtn() {
    setSearchByInput("");
    setQueryOption("all");
    setSearchByRegion("");
  }
  return (
    <Container>
      <SearchCountry
        isLightMode={isLightMode}
        onChange={(e) => handleSearchByInput(e)}
        type="text"
        placeholder=" Search a country..."
        value={searchByInput}
      />
      <FilterDiv>
        <FilterSelect
          isLightMode={isLightMode}
          value={searchByRegion}
          onChange={handleSearchByRegion}
        >
          <FilterOption value={"filter"}>Filter by Region</FilterOption>

          <FilterOption value="africa">Filter by Africa</FilterOption>
          <FilterOption value="america">Filter by America</FilterOption>
          <FilterOption value="asia">Filter by Asia</FilterOption>
          <FilterOption value="europe">Filter by Europe</FilterOption>
          <FilterOption value="oceania">Filter by Oceania</FilterOption>
        </FilterSelect>
        {searchByRegion && <ClearBtn onClick={handleClearBtn}>Clear</ClearBtn>}
      </FilterDiv>
    </Container>
  );
}

export default Input;
