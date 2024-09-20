"use client";
import React from "react";

import { WrapperPrimaryButton } from "./primary-button.styles";
import { PrimaryButtonProps } from "./primary-button.types";

export function PrimaryButton({
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
