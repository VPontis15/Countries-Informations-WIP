import { useNavigate, useParams } from "react-router-dom";

function CountryDetails() {
  const { name } = useParams();
  console.log(name);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <button onClick={goBack}>Go back </button>
    </div>
  );
}

export default CountryDetails;
