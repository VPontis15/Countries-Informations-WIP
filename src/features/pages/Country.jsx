import { useQuery } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import getCountries from "../../data/getCountries";
import CountryItem from "../main/CountryItem";
import LoadingScreen from "../../ui/LoadingScreen";

const StyledCountry = styled.div`
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

const Container = styled.div`
  width: 100%;
  max-width: min(95%, 1440px);
  display: flex;
  margin-top: 2.25em;
  margin-inline: auto;
  padding-inline: 1em;
  justify-content: space-between;
`;

const CountryGrid = styled.section`
  display: grid;
  padding-block: 5em;
  grid-template-columns: 700px 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 2rem;
  grid-template-areas:
    "image details details2 "
    "image details details2 ";
`;

const CountryImage = styled.img`
  display: block;
  max-width: 100%;
  width: 600px;

  height: 100%;
  object-fit: cover;
  object-position: center top;
  overflow: hidden;

  grid-area: image;
`;

const BorderCountriesDiv = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 500px;
  /* position: absolute; */
  align-items: center;
  bottom: 10px;
  left: -98px;
`;
const BorderCountries = styled.div`
  gap: 1rem;
  grid-area: border;
  margin-left: auto;
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const BorderCountry = styled(Link)`
  border: 1px solid
    ${(props) =>
      !props.isLightMode ? "var(--light-mode-bg)" : "var(--dark-mode-bg)"};
  display: inline-block;
  padding: 0.25em 1em;
  text-decoration: none;
  color: inherit;
`;

const BorderTitle = styled.span`
  width: 100%;
  display: block;
  margin-left: auto;
  text-align: right;
`;

const CountryInformations = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 80%;
  justify-content: center;
  grid-area: details;
`;
const CountryInformations2 = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 80%;
  justify-content: center;
  grid-area: details2;
`;

const BackButton = styled.button`
  background: none;
  border: 1px solid #e3e3e3;
  padding: 1em 2.25em;
  cursor: pointer;
`;

const CountryName = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

const CountryLabel = styled.p`
  font-weight: 800;
`;

const CountryValue = styled.span`
  font-weight: 300;
`;

function Country({ queryOption, setQueryOption, isLightMode }) {
  const { name } = useParams();
  const { isError, isLoading, data, error } = useQuery({
    queryKey: ["countries", name, queryOption],
    queryFn: () => getCountries("code", name),
  });

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
    setQueryOption((prev) => "all");
  };
  const goToMenu = () => {
    setQueryOption("all");
    navigate("/");
  };

  return (
    <>
      {isLoading && <LoadingScreen />}
      <Container>
        <BackButton onClick={goBack}>Go back</BackButton>
        <BackButton onClick={goToMenu}>Go ToMenu</BackButton>
      </Container>

      <Container>
        {data ? (
          data.map((country) => {
            return (
              <CountryGrid key={country.flag.svg}>
                <CountryImage src={country.flags.svg} alt={country.flags.alt} />

                <CountryInformations>
                  <CountryName>{country.name.common}</CountryName>
                  <div
                    style={{
                      flex: "1",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: "1rem",
                    }}
                  >
                    <p>
                      <span>Population:</span>
                      {country.population}
                    </p>
                    <p>
                      <span>Region:</span>
                      {country.region}
                    </p>
                    <p>
                      <span>Sub Region:</span>
                      {country.subregion}
                    </p>
                    <p>
                      <span>Capital:</span>
                      {country.capital}
                    </p>
                  </div>
                </CountryInformations>
                <CountryInformations2>
                  <div></div>
                  <p>
                    <span>Currencies: </span>
                    {Object.values(country.currencies).map((value, index) => (
                      <span key={index}>
                        {value.name}
                        {value.symbol}
                      </span>
                    ))}
                  </p>
                  <p>
                    <span>Languages: </span>
                    {Object.values(country.languages).map((language, index) => {
                      return <span key={index}>{language}</span>;
                    })}
                  </p>
                </CountryInformations2>
                <div style={{ position: "relative" }}>
                  <BorderCountriesDiv>
                    {country.borders && (
                      <BorderTitle>Border Countries:</BorderTitle>
                    )}
                    <BorderCountries>
                      {country.borders &&
                        country.borders?.map((borderCountry, index) => (
                          <BorderCountry
                            onClick={() => setQueryOption("code")}
                            to={`/country/${borderCountry}`}
                            key={index}
                          >
                            {borderCountry}
                          </BorderCountry>
                        ))}
                    </BorderCountries>
                  </BorderCountriesDiv>
                </div>
              </CountryGrid>
            );
          })
        ) : (
          <p>There was an error fetching the country</p>
        )}
      </Container>
    </>
  );
}

export default Country;
