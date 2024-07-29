import { LoadingButton } from "@mui/lab";
import React from "react";
import { ButtonLoadingProps } from "./button-loading.type";
import LoadingComponent from "../../layout/loading/loading-component/loading-component";

function ButtonLoading({ isLoading, type, buttonText }: ButtonLoadingProps) {
  return (
    <LoadingButton
      type={type}
      variant="contained"
      loading={isLoading}
      loadingPosition="center"
      loadingIndicator={<LoadingComponent />}
    >
      {buttonText}
    </LoadingButton>
  );
}

export default ButtonLoading;
