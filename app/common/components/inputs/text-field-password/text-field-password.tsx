"use client";
import React from "react";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";

import { FieldValues } from "react-hook-form";

import { TextFormFieldProps } from "../inputs.types";

import { useTextFieldPassword } from "./hooks/useTextFieldPassword";

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
