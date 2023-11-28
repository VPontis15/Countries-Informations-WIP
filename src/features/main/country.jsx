import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCountry = styled(Link)`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: #fff;
  min-height: 300px;
  max-height: 400px;
  max-width: 400px;
  text-decoration: none;
  color: inherit;

  &:visited,
  :active,
  :link {
    color: inherit;
  }
`;

const CountryDetails = styled.div`
  display: grid;
  gap: 0.25rem;
  padding-inline: 0.75em;
  padding-bottom: 0.75em;
`;

const CountryImage = styled.img`
  display: block;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  overflow: hidden;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const CountryName = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  padding-block: 0.75rem;
  padding-inline: 0.75em;
`;

const CountryLabel = styled.p`
  font-weight: 800;
`;

const CountryValue = styled.span`
  font-weight: 300;
`;

function country({ country }) {
  return (
    <StyledCountry to={`/country/${country.name.common}`}>
      <CountryImage alt={`${country.flags.alt}`} src={`${country.flags.svg}`} />
      <CountryName>{country.name.common}</CountryName>
      <CountryDetails>
        <CountryLabel>
          Population: <CountryValue> {country.population}</CountryValue>
        </CountryLabel>
        <CountryLabel>
          Region: <CountryValue> {country.region}</CountryValue>
        </CountryLabel>
        <CountryLabel>
          Capital: <CountryValue>{country.capital}</CountryValue>{" "}
        </CountryLabel>
      </CountryDetails>
    </StyledCountry>
  );
}

export default country;
