"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import React from "react";

function DefaultProgressBar() {
  return (
    <ProgressBar
      height="4px"
      color="#fffd00"
      options={{ showSpinner: false, easing: "ease" }}
    />
  );
}

export default DefaultProgressBar;
