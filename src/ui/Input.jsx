import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  max-width: min(85%, 1440px);
  display: flex;
  margin-inline: auto;
  padding-inline: 1em;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.25rem;
`;

const SearchCountry = styled.input`
  display: block;
  max-width: 100%;
  width: 450px;
  height: 50px;
  padding: 1em;
  font-size: 1.125rem;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.1);
  font-family: inherit;
`;

const FilterSelect = styled.select`
  padding: 1em 2.5em 1em 1em;
  height: 50px;
  background-color: #fff;
  border: none;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.1);
  font-family: inherit;
`;

const FilterOption = styled.option`
  background: none;
  border: none;
  font-family: inherit;
  font-size: 1rem;
`;

function Input({
  handleSearchByRegion,
  searchByRegion,
  searchByInput,
  handleSearchByInput,
}) {
  return (
    <Container>
      <SearchCountry
        onChange={(e) => handleSearchByInput(e)}
        type="text"
        placeholder=" Search a country..."
      />
      <FilterSelect value={searchByRegion} onChange={handleSearchByRegion}>
        <FilterOption value="/">Filter by Region</FilterOption>

        <FilterOption value="africa">Filter by Africa</FilterOption>
        <FilterOption value="america">Filter by America</FilterOption>
        <FilterOption value="asia">Filter by Asia</FilterOption>
        <FilterOption value="europe">Filter by Europe</FilterOption>
        <FilterOption value="oceania">Filter by Oceania</FilterOption>
      </FilterSelect>
    </Container>
  );
}

export default Input;
