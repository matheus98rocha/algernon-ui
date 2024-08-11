import { Box, styled } from "@mui/material";

export const WrapperModalContent = styled(Box)<{
  customWidth?: string;
}>(({ theme, customWidth }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: customWidth || "600px",
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
  padding: theme.spacing(4),
  borderRadius: "5px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    paddingTop: theme.spacing(2),
    borderRadius: 0,
  },
}));
