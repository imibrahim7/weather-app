import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

interface SearchBarProps {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setQuery }) => {
  const [search, setSearch] = useState<string>("");

  const GEO_DB_API_KEY = process.env.REACT_APP_GEO_DB_CITIES_API_KEY;
                
  const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
  const geoApiOptions = {
    method: "GET",
    headers: {
      "x-rapidapi-key": GEO_DB_API_KEY,
      "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
    },
  };

  const loadOptions = async (inputValue: string) => {
    const response = await fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    );
    const responseJson = await response.json();
    return {
      options: responseJson.data.map((city: any) => ({
        value: city.name,
        label: `${city.name}, ${city.countryCode}`,
      })),
    };
  };

  const handleChange = (selectedOption: any) => {
    setSearch(selectedOption);
    setQuery(selectedOption.value);
  };

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: "#202a3b",
      color: "white",
      border: "none",
      boxShadow: "none",
      "&:hover": {
        border: "none",
      },
      padding: "5px",
      borderRadius: "15px",
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: "white",
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: "#202a3b",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#3b475a" : "#202a3b",
      color: "white",
      "&:hover": {
        backgroundColor: "#3b475a",
      },
    }),
    input: (provided: any) => ({
      ...provided,
      color: "white",
      cursor: "pointer",
      height: "40px",
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: "white",
    }),
  };

  return (
    <AsyncPaginate
      value={search}
      loadOptions={loadOptions}
      onChange={handleChange}
      placeholder="Search for cities"
      styles={customStyles}
      className="w-7/10 ml-5 my-3 h-12 outline-none text-[20px]"
    />
  );
};

export default SearchBar;
