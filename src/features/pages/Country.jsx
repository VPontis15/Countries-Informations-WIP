import { useQuery } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import getCountries from "../../data/getCountries";
import CountryItem from "../main/CountryItem";
import LoadingScreen from "../../ui/LoadingScreen";
import Map from "../../ui/Map";
import { useLightMode } from "../layout/Layout";

const Container = styled.div`
  width: 100%;
  max-width: min(90%, 1440px);
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  margin-top: 2.25em;
  margin-inline: auto;

  justify-content: ${(props) => props.justify || "center"};

  @media screen and (max-width: 700px) {
    flex-direction: column;
    gap: 2em;
    align-items: center;
    /* align-items: center; */
  }
`;

const CountryGrid = styled.section`
  display: grid;
  padding-block: 5em;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 3;
  flex-direction: column;
  gap: 3em;

  width: 100%;

  @media screen and (max-width: 1200px) {
    gap: 6em;
  }
  @media screen and (max-width: 950px) {
    gap: 3em;
  }
`;

const CountryImage = styled.img`
  display: block;
  max-width: 650px;
  width: 100%;
  grid-row: 1/3;
  grid-column: 1;
  object-fit: cover;
  object-position: center top;
  overflow: hidden;
  @media screen and (max-width: 1200px) {
    grid-column: 1/3;
    grid-row: 1/3;
    margin-inline: auto;
  }
  @media screen and (max-width: 700px) {
    grid-column: 1/3;
    grid-row: 1/3;
    margin-inline: auto;
  }
`;

const CountryInformationsContainer = styled.div`
  display: flex;
  gap: 3em;
  justify-content: start;
  align-items: center;
  grid-row: 1/2;
  grid-column: 2;
  @media screen and (max-width: 1200px) {
    display: block;
    justify-content: center;
    align-items: center;

    grid-column: 3;
    gap: 0;
  }
  @media screen and (max-width: 950px) {
    display: flex;
    flex-direction: column;
    grid-column: 1/3;
    grid-row: 3;
    flex-direction: row;
    gap: 4em;
    justify-content: center;
    align-items: center;
    padding-inline: 0.5em;
  }
  @media screen and (max-width: 570px) {
    display: block;
    grid-column: 1/3;

    margin-inline: auto;
    padding-left: 1.25em;
    gap: 0.25em;
  }
`;

const CountryInformations = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  @media screen and (max-width: 700px) {
    justify-content: start;
  }
`;
const CountryInformations2 = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  justify-content: center;
`;

const BackButton = styled.button`
  background: none;
  border: 1px solid #e3e3e3;
  padding: 1em 2.25em;
  cursor: pointer;
  min-width: 125px;
  @media screen and (max-width: 700px) {
    width: 50%;
    max-width: 100%;
  }
`;

const CountryName = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.75em;
  @media screen and (max-width: 700px) {
    text-align: left;
  }
`;

const CountryInformation = styled.p`
  display: inline-flex;
  gap: 0.5rem;
`;

const BorderCountriesDiv = styled.div`
  display: flex;
  gap: 1.5rem;
  flex: 1;
  grid-row: 2/3;
  margin-top: 4em;
  align-items: center;

  @media screen and (max-width: 1200px) {
    grid-row: 2;
    grid-column: 1/-1;
    flex-direction: column;
    margin-top: 4em;
    gap: 1em;
  }
  @media screen and (max-width: 950px) {
    flex-direction: column;
    grid-row: 4;
    grid-column: 1/-1;
    margin-top: 0;
  }
  @media screen and (max-width: 700px) {
    grid-column: 1/3;
  }
`;
const BorderCountries = styled.div`
  gap: 1rem;

  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 570px) {
    justify-content: center;
  }
`;

const BorderCountry = styled(Link)`
  border: 1px solid
    ${(props) =>
      props.isLightMode ? "var(--dark-mode-bg)" : "var(--light-mode-bg)"};

  padding: 0.25em 1.25em;
  vertical-align: middle;
  text-decoration: none;
  color: inherit;
`;

const BorderTitle = styled.span``;
function Country({ queryOption, setQueryOption }) {
  const { name } = useParams();
  const { isLightMode } = useLightMode();
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
      <Container justify={"space-between"} direction={"row"}>
        <BackButton onClick={goBack}>Go back</BackButton>
        <BackButton onClick={goToMenu}>Go ToMenu</BackButton>
      </Container>

      <Container>
        {data ? (
          data.map((country) => {
            const [lat, lng] = country.latlng;
            return (
              <>
                <CountryGrid key={country.flag.svg}>
                  <CountryImage
                    src={country.flags.svg}
                    alt={country.flags.alt}
                  />
                  <CountryInformationsContainer>
                    <CountryInformations>
                      <CountryName>{country.name.common}</CountryName>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",

                          gap: "1rem",
                        }}
                      >
                        <CountryInformation>
                          <span>Population:</span>
                          {country.population}
                        </CountryInformation>
                        <CountryInformation>
                          <span>Region:</span>
                          {country.region}
                        </CountryInformation>
                        <CountryInformation>
                          <span>Sub Region:</span>
                          {country.subregion}
                        </CountryInformation>
                        <CountryInformation>
                          <span>Capital:</span>
                          {country.capital}
                        </CountryInformation>
                      </div>
                    </CountryInformations>

                    <CountryInformations2>
                      <div></div>
                      <CountryInformation>
                        <span>Currencies:</span>
                        {Object.values(country.currencies).map(
                          (value, index) => (
                            <span key={index}>
                              {value.name}
                              {value.symbol}
                            </span>
                          )
                        )}
                      </CountryInformation>
                      <CountryInformation>
                        <span>Languages:</span>
                        {Object.values(country.languages).map(
                          (language, index) => {
                            return <span key={index}>{language}</span>;
                          }
                        )}
                      </CountryInformation>
                    </CountryInformations2>
                  </CountryInformationsContainer>
                  <BorderCountriesDiv>
                    {country.borders && (
                      <BorderTitle>Border Countries:</BorderTitle>
                    )}
                    <BorderCountries>
                      {country.borders &&
                        country.borders?.map((borderCountry, index) => (
                          <BorderCountry
                            isLightMode={isLightMode}
                            onClick={() => setQueryOption("code")}
                            to={`/country/${borderCountry}`}
                            key={index}
                          >
                            {borderCountry}
                          </BorderCountry>
                        ))}
                    </BorderCountries>
                  </BorderCountriesDiv>{" "}
                </CountryGrid>
                <Map popup={country.name.common} position={[lat, lng]} />
              </>
            );
          })
        ) : (
          <p>There was an error fetching the country</p>
        )}{" "}
      </Container>
    </>
  );
}

export default Country;
