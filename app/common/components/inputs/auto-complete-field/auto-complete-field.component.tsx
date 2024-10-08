import * as React from "react";

import SearchIcon from "@mui/icons-material/Search";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";

import { AutoCompleteFieldProps } from "./auto-complete-field.types";

export function AutoCompleteField({
  isLoading,
  options,
  value,
  handleSearchBookName,
  onChange,
  setSelectedBook,
  helperText,
  error,
}: AutoCompleteFieldProps) {
  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.title}
      filterOptions={(options) => options}
      clearIcon={false}
      popupIcon={false}
      forcePopupIcon={false}
      openOnFocus={false}
      loading={isLoading}
      inputValue={value}
      onInputChange={(_, newInputValue) => {
        onChange(newInputValue);
      }}
      onChange={(_, newValue) => {
        setSelectedBook(newValue || null); // Atualiza o estado com o objeto selecionado
      }}
      renderOption={(props, option) => (
        <li {...props}>
          <div>
            <strong>{option.title}</strong>
            <br />
            <span>{option.authors}</span>
          </div>
        </li>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          helperText={helperText}
          error={error}
          placeholder="Pesquise seu livro"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {isLoading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : (
                  <SearchIcon onClick={() => handleSearchBookName(value)} />
                )}
                {params.InputProps.endAdornment}
              </>
            ),
            disableUnderline: true,
          }}
        />
      )}
    />
  );
}
