"use client";
import React from "react";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export function DefaultProgressBar() {
  return (
    <ProgressBar
      height="4px"
      color="#fffd00"
      options={{ showSpinner: false, easing: "ease" }}
    />
  );
}

export default DefaultProgressBar;
