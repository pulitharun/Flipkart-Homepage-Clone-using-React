import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const Searchbar = () => {
  return (
    <Autocomplete
      disablePortal
      id="searchbar"
      options={options}
      sx={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} placeholder="search for Products" />
      )}
    />
  );
};

const options = ["Electronics", "Mens", "Womens", "Children"];

export default Searchbar;
