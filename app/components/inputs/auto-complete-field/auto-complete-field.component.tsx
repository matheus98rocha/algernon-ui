import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";

type AutoCompleteFieldProps = {
  isLoading: boolean;
  options: {
    title: string;
    authors: string;
    description: string;
    bookImage: string;
  }[];
  value: string;
  onChange: (value: string) => void;
  handleSearchBookName: (value: string) => void;
};

export default function AutoCompleteField({
  isLoading,
  options,
  value,
  handleSearchBookName,
  onChange,
}: AutoCompleteFieldProps) {

  return (
    <Autocomplete
      id="combo-box-demo"
      options={options}
      getOptionLabel={(option: any) => option.title}
      clearIcon={false}
      popupIcon={false}
      forcePopupIcon={false}
      loading={isLoading}
      inputValue={value}
      onInputChange={(_, newInputValue) => {
        onChange(newInputValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label=""
          placeholder="Search City"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon onClick={() => handleSearchBookName(value)} />
              </InputAdornment>
            ),
            disableUnderline: true,
          }}
        />
      )}
    />
  );
}
