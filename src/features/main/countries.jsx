import { useQuery, useQueryClient } from "react-query";
import getCountries from "../../data/getCountries";
import Country from "./Country";
import styled from "styled-components";

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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: center;
  gap: 2rem;
  row-gap: 3rem;
`;

function Countries() {
  const queryClient = useQueryClient();
  const { isError, data, isLoading, error, refetch } = useQuery(
    "countries",
    getCountries
  );
  console.log(data);

  return (
    <MainContent>
      {isLoading && <p>Loading...</p>}
      <Container>
        <StyledCountries>
          {data &&
            data
              .map((country) => (
                <Country key={country.capital} country={country} />
              ))
              .splice(0, 20)}
        </StyledCountries>
      </Container>
    </MainContent>
  );
}

export default Countries;
