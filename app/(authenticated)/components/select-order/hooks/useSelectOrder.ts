"use client";
import { useEffect, useMemo, useState } from "react";

import { SelectChangeEvent } from "@mui/material";

import { useRouter, useSearchParams } from "next/navigation";

export function useSelectOder() {
  const [shortingValue, setShortingValue] = useState<string>("");

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const currentOrderBy = searchParams.get("orderBy") || "";
    setShortingValue(currentOrderBy);
  }, [searchParams]);

  const newParams = useMemo(
    () => new URLSearchParams(searchParams.toString()),
    [searchParams],
  );

  const handleChange = (event: SelectChangeEvent) => {
    const newValue = event.target.value;

    setShortingValue(newValue);

    if (newValue === "") {
      newParams.delete("orderBy");
    } else {
      newParams.set("orderBy", newValue);
    }

    router.push(`?${newParams.toString()}`);
  };
  return {
    handleChange,
    shortingValue,
  };
}
