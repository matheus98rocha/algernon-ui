"use client";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";

import { useTextFieldPassword } from "./hooks/useTextFieldPassword";
import { TextFormFieldProps } from "../inputs.types";

function TextFieldPassword<TFieldValues extends FieldValues>({
  label,
  register,
  errors,
  registerOption,
}: TextFormFieldProps<TFieldValues>) {
  const { handleClickShowPassword, handleMouseDownPassword, showPassword } =
    useTextFieldPassword();
  return (
    <TextField
      {...register(registerOption)}
      label={label}
      variant="outlined"
      type={showPassword ? "text" : "password"}
      helperText={errors[registerOption]?.message as string}
      error={!!errors[registerOption]}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default TextFieldPassword;
