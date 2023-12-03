import { useState } from "react";
import Input from "../../ui/Input";
import Countries from "../main/countries";
import { useNavigate } from "react-router-dom";

function Homepage({
  queryOption,
  setQueryOption,
  isLightMode,
  handleLightMode,
}) {
  const [searchByRegion, setSearchByRegion] = useState("");
  const [searchByInput, setSearchByInput] = useState("");
  const navigate = useNavigate();

  const handleSearchByRegion = (e) => {
    if (e.target.value === "filter") {
      navigate("/");
      setSearchByInput("");
      setQueryOption("all");
      setSearchByRegion("");
    } else {
      setQueryOption("region");
      setSearchByRegion(e.target.value);
      setSearchByInput("");
    }
  };
  const handleSearchByInput = (e) => {
    setQueryOption("name");
    setSearchByInput(e.target.value);
  };

  if (searchByRegion === "filter") setQueryOption("all");
  if (!searchByInput && searchByRegion) {
    setQueryOption("region");
  }
  if (searchByInput && !searchByRegion) {
    setQueryOption("name");
  }
  if (!searchByInput && !searchByRegion) setQueryOption("all");

  return (
    <>
      <Input
        setQueryOption={setQueryOption}
        searchByInput={searchByInput}
        handleSearchByInput={handleSearchByInput}
        searchByRegion={searchByRegion}
        handleSearchByRegion={handleSearchByRegion}
        queryOption={queryOption}
        setSearchByInput={setSearchByInput}
        setSearchByRegion={setSearchByRegion}
      />
      <Countries
        searchByInput={searchByInput}
        handleSearchByInput={handleSearchByInput}
        searchByRegion={searchByRegion}
        queryOption={queryOption}
        setQueryOption={setQueryOption}
      />
    </>
  );
}

export default Homepage;
