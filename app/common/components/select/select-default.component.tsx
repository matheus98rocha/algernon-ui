import React from "react";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { SelectDefaultProps } from "./select-default.types";

// Usando forwardRef para passar a ref corretamente
const SelectDefault = ({
  label,
  onChange,
  options,
  value,
  id,
}: SelectDefaultProps) => {
  return (
    <FormControl
      fullWidth
      sx={{
        backgroundColor: "background.paper",
      }}
    >
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select
        labelId={`${id}-label`}
        id={id}
        value={value}
        label={label}
        onChange={onChange}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectDefault;
