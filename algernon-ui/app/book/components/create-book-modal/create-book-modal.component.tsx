"use client";

import {
  Box,
  CircularProgress,
  Modal,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { createBookModalProps } from "./create-book-modal.types";
import { LoadingButton } from "@mui/lab";
import { useCreateModal } from "./hooks/useCreateBookModal";
import CloseIcon from "@mui/icons-material/Close";

function CreateBookModal({ open, handleClose }: createBookModalProps) {
  const { errors, handleSubmit, isLoading, onSubmit, register } =
    useCreateModal({ handleClose });
  const theme = useTheme();
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const createBookModalstyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: onlySmallScreen ? "100%" : 600,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: onlySmallScreen ? 0 : "10px",
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={createBookModalstyle}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "100%",
            padding: "16px",
          }}
        >
          <CloseIcon
            sx={{
              cursor: "pointer",
            }}
            onClick={handleClose}
          />
        </Box>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <TextField
              {...register("book")}
              label="Book Name"
              variant="outlined"
              type="text"
              helperText={errors.book?.message}
              error={!!errors.book}
            />

            <TextField
              {...register("author")}
              label="Author Name"
              variant="outlined"
              type="text"
              helperText={errors.author?.message}
              error={!!errors.author}
            />

            {/* Transformar em campo de text área */}
            <TextField
              multiline={true}
              rows={3}
              label="Description"
              placeholder="Description"
              autoComplete="off"
              variant="outlined"
              {...register("description")}
              helperText={errors.description?.message}
              error={!!errors.description}
            />

            {/* Criar componente para ser utilizado no layout de AUTH */}
            <LoadingButton
              type={"submit"}
              variant="contained"
              loading={isLoading}
              loadingPosition="center"
              loadingIndicator={<CircularProgress color="info" size={16} />}
            >
              {"Create Book"}
            </LoadingButton>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}

export default CreateBookModal;
