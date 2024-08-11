import React from "react";
import { PrimaryButtonProps } from "./primary-button.types";
import { WrapperPrimaryButton } from "./primary-button.styles";

function PrimaryButton({
  sx,
  type,
  LinkComponent,
  href,
  startIcon,
  children,
}: PrimaryButtonProps) {
  return (
    <WrapperPrimaryButton
      sx={sx}
      type={type}
      variant="contained"
      LinkComponent={LinkComponent}
      href={href}
      startIcon={startIcon}
    >
      {children}
    </WrapperPrimaryButton>
  );
}

export default PrimaryButton;
