async function getCountries(searchOption = "all", searchQuery = "") {
  let FETCH_URL = `https://restcountries.com/v3.1/`;
  try {
    if (searchOption === "all") FETCH_URL += "all";
    if (searchOption === "region")
      FETCH_URL += `${searchOption}/${searchQuery}`;
    if (searchOption === "name") FETCH_URL += `${searchOption}/${searchQuery}`;
    const res = await fetch(`${FETCH_URL}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    console.log(FETCH_URL);
    return data;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

export default getCountries;

// https://restcountries.com/v3.1/name/{name}
// https://restcountries.com/v3.1/region/{region}
