"use client";
import { Grid } from "@mui/material";
import React, { useState } from "react";
import StatusStack from "./components/status-stack/status-stack.component";
import SearchInput from "./components/search-input/search-input.component";

function FilterBooksContainer() {
  const [bookName, setBookName] = useState<string>("");
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "1rem",
        marginBottom: "1rem",
      }}
    >
      <StatusStack setBookName={setBookName} />
      <SearchInput bookName={bookName} setBookName={setBookName} />
    </Grid>
  );
}

export default FilterBooksContainer;
