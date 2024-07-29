"use client";

import {
  Box,
  CircularProgress,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { createBookModalProps } from "./create-book-modal.types";
import { LoadingButton } from "@mui/lab";
import { useCreateModal } from "./hooks/useCreateBookModal";
import CloseIcon from "@mui/icons-material/Close";
import LoadingComponent from "@/app/components/layout/loading/loading-component/loading-component";
import { Controller } from "react-hook-form";
import ButtonLoading from "@/app/components/buttons/button-loading/button-loading.component";

function CreateBookModal({ open, handleClose }: createBookModalProps) {
  const { errors, handleSubmit, isLoading, onSubmit, register, control } =
    useCreateModal({ handleClose });
  const theme = useTheme();
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const statusOptions = [
    { value: "wantToRead", label: "Quero Ler" },
    { value: "reading", label: "Estou Lendo" },
    { value: "alreadyRead", label: "Já Li" },
    { value: "rereading", label: "Relendo" },
    { value: "abandoned", label: "Abandonado" },
  ];

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
              label="Nome do Livro"
              variant="outlined"
              type="text"
              helperText={errors.book?.message}
              error={!!errors.book}
            />

            <TextField
              {...register("author")}
              label="Nome do Autor"
              variant="outlined"
              type="text"
              helperText={errors.author?.message}
              error={!!errors.author}
            />

            {/* Transformar em campo de text área */}
            <TextField
              multiline={true}
              rows={3}
              label="Descrição do livro"
              placeholder="Description"
              autoComplete="off"
              variant="outlined"
              {...register("description")}
              helperText={errors.description?.message}
              error={!!errors.description}
            />

            {/* Componentizar o select */}
            <FormControl fullWidth error={!!errors.status} variant="outlined">
              <InputLabel id="status-label">Status</InputLabel>
              <Controller
                name="status"
                control={control}
                defaultValue={undefined}
                rules={{ required: "Status é obrigatório" }}
                render={({ field }) => (
                  <Select
                    labelId="status-label"
                    id="status"
                    label="Status"
                    {...field}
                  >
                    {statusOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              <FormHelperText>{errors.status?.message}</FormHelperText>
            </FormControl>

            {/* Criar componente para ser utilizado no layout de AUTH */}
            {/* <LoadingButton
              type={"submit"}
              variant="contained"
              loading={isLoading}
              loadingPosition="center"
              loadingIndicator={<LoadingComponent />}
            >
              {"Criar"}
            </LoadingButton> */}
            <ButtonLoading
              buttonText="Criar"
              isLoading={isLoading}
              type={"submit"}
            />
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}

export default CreateBookModal;
