async function getCountries(searchOption = "all", searchQuery = "") {
  const BASE_URL = "https://restcountries.com/v3.1/";
  let fetchURL = BASE_URL;

  try {
    switch (searchOption) {
      case "code":
        fetchURL += `alpha?codes=${searchQuery}`;
        break;
      case "all":
        fetchURL += "all";
        break;
      case "region":
        fetchURL += `region/${searchQuery}`;
        break;
      case "name":
        fetchURL += `name/${searchQuery}`;
        break;
      default:
        fetchURL += "all";
        break;
    }

    const res = await fetch(fetchURL);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

export default getCountries;

// https://restcountries.com/v3.1/name/{name}
// https://restcountries.com/v3.1/region/{region}
// https://restcountries.com/v3.1/alpha?codes={code}
