"use client";
import { Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";
import citiesJson from "cities.json";

import { City } from "../../types/weather-app";

interface SearchProps {
  onSelect: (city: City) => void;
}

interface CityJson {
  name: string;
  lat: string;
  lng: string;
  country: string;
  admin1: string;
  admin2: string;
}

const Search: React.FC<SearchProps> = ({ onSelect }) => {
  const [input, setInput] = useState("");
  const sortedCities = (citiesJson as Array<CityJson>).sort((a, b) =>
    a.country.localeCompare(b.country)
  );

  return (
    <Autocomplete
      id="select-city"
      disablePortal
      value={null} // reset selected value every time
      open={input.length > 1}
      inputValue={input}
      options={sortedCities}
      onInputChange={(_e, value, reason) => {
        switch (reason) {
          case "input":
            return setInput(value);
          default:
            return setInput("");
        }
      }}
      getOptionLabel={({ name, country }) => `${name}, ${country}`}
      getOptionKey={({ lat, lng }) => `${lat}, ${lng}`}
      filterOptions={(options, state) => {
        const formatString = (str: string) => str.toLowerCase().trim();
        const getName = (option: CityJson) => formatString(option.name);

        const displayOptions = options.filter((option) =>
          getName(option).includes(formatString(state.inputValue))
        );

        const sortedOptions = displayOptions.sort((a, b) => {
          const startsWithA = getName(a).startsWith(
            formatString(state.inputValue)
          );
          const startsWithB = getName(b).startsWith(
            formatString(state.inputValue)
          );
          if (startsWithA && !startsWithB) {
            return -1;
          } else if (!startsWithA && startsWithB) {
            return 1;
          } else {
            return getName(a).localeCompare(getName(b));
          }
        });

        return sortedOptions.slice(0, 15);
      }}
      onChange={(_e, value, reason) => {
        if (reason === "selectOption") {
          return onSelect({
            name: value!.name,
            lat: Number(value!.lat),
            lon: Number(value!.lng),
          });
        }
      }}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            label="Search"
            // Currently MUI doesn't offer an option to remove the arrow icon
            InputProps={{ ...params.InputProps, endAdornment: undefined }}
          />
        );
      }}
      fullWidth
    />
  );
};

export default Search;
