import { useQuery, useQueryClient } from "react-query";
import getCountries from "../../data/getCountries";
import CountryItem from "./CountryItem";
import styled from "styled-components";
import LoadingScreen from "../../ui/LoadingScreen";

const MainContent = styled.main`
  margin-block: 5rem;
`;

const Container = styled.div`
  width: 100%;
  max-width: min(85%, 1440px);
  display: flex;
  margin-inline: auto;
  padding-inline: 1em;
  justify-content: space-between;
`;

const StyledCountries = styled.ul`
  width: 100%;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  align-items: center;
  gap: 4rem;
  row-gap: 4rem;
`;

function Countries({ searchByRegion, searchByInput, queryOption = "all" }) {
  const searchQuery =
    queryOption === "name" ? searchByInput : searchByRegion || "";

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["countries", queryOption, searchQuery],
    queryFn: () => getCountries(queryOption, searchQuery),
  });

  return (
    <MainContent>
      <Container>
        <StyledCountries>
          {data &&
            data.map((country) => (
              <CountryItem key={country.cca2} country={country} />
            ))}
        </StyledCountries>
      </Container>
    </MainContent>
  );
}

export default Countries;
