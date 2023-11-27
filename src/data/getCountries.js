async function getCountries() {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/region/europe`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

export default getCountries;
