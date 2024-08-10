"use client";

import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import { createBookModalProps } from "./create-book-modal.types";
import { useCreateModal } from "./hooks/useCreateBookModal";

import { Controller } from "react-hook-form";
import ButtonLoading from "@/app/components/buttons/button-loading/button-loading.component";
import * as S from "./create-book-modal.styles";
import AutoCompleteField from "@/app/components/inputs/auto-complete-field/auto-complete-field.component";
import Image from "next/image";
import NotAvaibleImage from "@/app/components/not-avaible-image/not-avaible-image.component";

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
  } = useCreateModal({ handleClose });

  const authorValue = watch("author");
  const descriptionValue = watch("description");

  const showFields = authorValue && descriptionValue;

  const statusOptions = [
    { value: "wantToRead", label: "Quero Ler" },
    { value: "reading", label: "Estou Lendo" },
    { value: "alreadyRead", label: "Já Li" },
    { value: "rereading", label: "Relendo" },
    { value: "abandoned", label: "Abandonado" },
  ];

  return (
    <Modal open={open} onClose={handleClose}>
      <S.WrapperModalContent>
        <S.ModalHeader>
          <S.CloseIconStyled onClick={handleClose} />
        </S.ModalHeader>
        <S.StyledFormControl onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
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
              <>
                <Controller
                  control={control}
                  name="imageUrl"
                  render={({ field: { value } }) => {
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
                  }}
                />
                <Controller
                  control={control}
                  name="author"
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <TextField
                      {...register("author")}
                      label="Nome do Autor"
                      variant="outlined"
                      value={value}
                      inputRef={ref}
                      onChange={onChange}
                      onBlur={onBlur}
                      type="text"
                      helperText={errors.author?.message}
                      error={!!errors.author}
                      disabled={true}
                    />
                  )}
                />

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
                      disabled={true}
                    />
                  )}
                />
                <FormControl
                  fullWidth
                  error={!!errors.status}
                  variant="outlined"
                >
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
                <ButtonLoading
                  buttonText="Criar"
                  isLoading={isLoading}
                  type={"submit"}
                />
              </>
            )}
          </Stack>
        </S.StyledFormControl>
      </S.WrapperModalContent>
    </Modal>
  );
}

export default CreateBookModal;
