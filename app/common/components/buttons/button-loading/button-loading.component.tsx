import React from "react";

import { LoadingButton } from "@mui/lab";

import { LoadingComponent } from "../../loading";

import { ButtonLoadingProps } from "./button-loading.type";

export function ButtonLoading({
  isLoading,
  type,
  buttonText,
  onClick,
  color = "primary",
}: ButtonLoadingProps) {
  return (
    <LoadingButton
      type={type}
      color={color}
      variant="contained"
      loading={isLoading}
      loadingPosition="center"
      loadingIndicator={<LoadingComponent />}
      sx={{
        width: "100%",
      }}
      onClick={onClick}
    >
      {buttonText}
    </LoadingButton>
  );
}
