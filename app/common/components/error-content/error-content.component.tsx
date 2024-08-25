"use client";

import { Button } from "@mui/material";
import Link from "next/link";

import { WrapperErrorContent } from "./error-content.styles";
import { ErrorContentProps } from "./error-content.types";

const ErrorContent = ({ message }: ErrorContentProps) => {
  return (
    <WrapperErrorContent>
      <h1>{message}</h1>
      <Link href="/">
        <Button variant="contained">Página inicial do Algernon</Button>
      </Link>
    </WrapperErrorContent>
  );
};

export default ErrorContent;
