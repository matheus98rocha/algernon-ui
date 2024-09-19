import React from "react";

import { LoadingButton } from "@mui/lab";

import { LoadingComponent } from "../../loading";

import { ButtonLoadingProps } from "./button-loading.type";

function ButtonLoading({ isLoading, type, buttonText }: ButtonLoadingProps) {
  return (
    <LoadingButton
      type={type}
      variant="contained"
      loading={isLoading}
      loadingPosition="center"
      loadingIndicator={<LoadingComponent />}
      sx={{
        width: "100%",
      }}
    >
      {buttonText}
    </LoadingButton>
  );
}

export default ButtonLoading;
