"use client";

import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import { Controller } from "react-hook-form";

import ButtonLoading from "@/app/common/components/buttons/button-loading/button-loading.component";
import AutoCompleteField from "@/app/common/components/inputs/auto-complete-field/auto-complete-field.component";
import ModalWrapper from "@/app/common/components/modal-wrapper/modal-wrapper.layout";
import NotAvaibleImage from "@/app/common/components/not-avaible-image/not-avaible-image.component";

import * as S from "./create-book-modal.styles";
import { createBookModalProps } from "./create-book-modal.types";
import { useCreateModal } from "./hooks/useCreateBookModal";

function CreateBookModal({ open, handleClose }: createBookModalProps) {
  const {
    errors,
    handleSubmit,
    isLoading,
    onSubmit,
    register,
    control,
    handleSearchBookName,
    watch,
    booksSearch,
    isLoadingBooksSearch,
    handleSetValues,
    handleCloseModal,
  } = useCreateModal({ handleClose });

  const showFields = !!watch("author") && !!watch("description");

  const statusOptions = [
    { value: "wantToRead", label: "Quero Ler" },
    { value: "reading", label: "Estou Lendo" },
    { value: "alreadyRead", label: "Já Li" },
    { value: "rereading", label: "Relendo" },
    { value: "abandoned", label: "Abandonado" },
  ];

  const renderImage = (value: string) => {
    if (value.length === 0 || value === "No image available") {
      return <NotAvaibleImage />;
    } else {
      return (
        <Image
          {...register("imageUrl")}
          src={value}
          alt="book-image"
          width={148}
          height={223}
        />
      );
    }
  };

  return (
    <ModalWrapper handleCloseModal={handleCloseModal} open={open}>
      <S.ModalHeader>
        <S.StyledModalTitle>
          {showFields ? "Adicionar Livro" : "Pesquisar Livro"}
        </S.StyledModalTitle>
        <S.CloseIconStyled onClick={handleCloseModal} />
      </S.ModalHeader>
      <S.StyledFormControl onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: 4,
              width: "100%",
            }}
          >
            {showFields && (
              <Controller
                control={control}
                name="imageUrl"
                render={({ field: { value } }) => renderImage(value)}
              />
            )}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Controller
                control={control}
                name="book"
                render={({ field: { onChange, value } }) => (
                  <AutoCompleteField
                    {...register("book")}
                    isLoading={isLoadingBooksSearch}
                    options={booksSearch}
                    handleSearchBookName={() => handleSearchBookName(value)}
                    value={value}
                    onChange={onChange}
                    setSelectedBook={handleSetValues}
                    helperText={errors.book?.message}
                    error={!!errors.book}
                  />
                )}
              />
              {showFields && (
                <Controller
                  control={control}
                  name="author"
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <TextField
                      {...register("author")}
                      sx={{
                        width: "100%",
                      }}
                      label="Nome do Autor"
                      variant="outlined"
                      value={value}
                      inputRef={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                      type="text"
                      helperText={errors.author?.message}
                      error={!!errors.author}
                      disabled
                    />
                  )}
                />
              )}
            </Box>
          </Box>
          {showFields && (
            <>
              <Controller
                control={control}
                name="description"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextField
                    {...register("description")}
                    multiline
                    rows={3}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    label="Descrição do livro"
                    placeholder="Descrição"
                    autoComplete="off"
                    variant="outlined"
                    helperText={errors.description?.message}
                    error={!!errors.description}
                    disabled
                  />
                )}
              />
              <FormControl fullWidth error={!!errors.status} variant="outlined">
                <InputLabel id="status-label">Status</InputLabel>
                {/* User o componente SelectDefault */}
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    width: "200px",
                  }}
                >
                  <ButtonLoading
                    buttonText="Adicionar"
                    isLoading={isLoading}
                    type={"submit"}
                  />
                </Box>
              </Box>
            </>
          )}
        </Stack>
      </S.StyledFormControl>
    </ModalWrapper>
  );
}

export default CreateBookModal;
