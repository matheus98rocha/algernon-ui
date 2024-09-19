import { ReactNode } from "react";

import { SelectChangeEvent } from "@mui/material";

export type SelectDefaultProps = {
  label: string;
  value: string;
  onChange: (event: SelectChangeEvent<string>, child: ReactNode) => void;
  options: {
    value: string | number;
    label: string;
  }[];
  id?: string;
};
