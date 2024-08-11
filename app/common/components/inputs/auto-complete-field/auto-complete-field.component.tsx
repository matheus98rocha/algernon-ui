import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";

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
  setSelectedBook: (
    book: {
      title: string;
      authors: string;
      description: string;
      bookImage: string;
    } | null,
  ) => void;
  helperText: string | undefined;
  error: boolean;
};

export default function AutoCompleteField({
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
