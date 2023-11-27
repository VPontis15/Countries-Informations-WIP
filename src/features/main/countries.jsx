import { useQuery, useQueryClient } from "react-query";
import getCountries from "../../data/getCountries";

function Countries() {
  const queryClient = useQueryClient();
  const { isError, data, isLoading, error, refetch } = useQuery({
    queryKey: "countries",
    queryFn: getCountries,
  });
  console.log(data);

  return (
    <div>
      {isLoading && <p>Loading...</p>}

      <ul>
        {data.map((country) => (
          <img
            style={{ display: "block", width: "100px", marginBottom: "1rem" }}
            key={country.capital}
            src={`${country.flags.svg}`}
            alt={`${country.flags.alt}`}
          />
        ))}
      </ul>
    </div>
  );
}

export default Countries;
