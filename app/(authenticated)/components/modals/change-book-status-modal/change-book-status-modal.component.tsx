"use client";
import React, { useCallback } from "react";

import { Box, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { patchBookStatus } from "@/app/(authenticated)/services/books/book.service";
import {
  LoadingContainer,
  ModalWrapper,
  RenderList,
} from "@/app/common/components";
import { BookStatus } from "@/app/common/types/book.type";
import { useToast } from "@/app/contexts/toast.context";
import { useRefetchQuerie } from "@/app/hooks/useRefetchQuerie.hook";

import { BookMark } from "../../bookmark/book-mark.component";

type ChangeBookStatusModalProps = {
  handleCloseModal: () => void;
  open: boolean;
  currentBookStatus: BookStatus;
  bookId: number;
};
type BookMarkProps = {
  status: BookStatus;
  statusLabel: "Quero Ler" | "Já Li" | "Estou Lendo" | "Abandonado" | "Relendo";
};

export function ChangeBookStatusModal({
  handleCloseModal,
  open,
  currentBookStatus,
  bookId,
}: ChangeBookStatusModalProps) {
  const { showToast } = useToast();
  const { handleResetQuerie } = useRefetchQuerie();

  const router = useRouter();

  const mappedStatusBookMark: BookMarkProps[] = [
    { status: "wantToRead", statusLabel: "Quero Ler" },
    { status: "alreadyRead", statusLabel: "Já Li" },
    { status: "reading", statusLabel: "Estou Lendo" },
    { status: "rereading", statusLabel: "Relendo" },
    { status: "abandoned", statusLabel: "Abandonado" },
  ];

  const handlePageChange = useCallback(
    (status: BookStatus) => {
      const newParams = new URLSearchParams(status);
      newParams.set("status", status);
      router.push(`?${newParams.toString()}`);
    },
    [router],
  );

  const { mutateAsync: handleChangeBookStatus, isPending } = useMutation({
    mutationFn: async (status: BookStatus) => {
      patchBookStatus(status, bookId).finally(() => {
        handlePageChange(status);
      });
    },
    onSuccess: () => {
      handleResetQuerie("books");
      handleCloseModal();
    },
    onError: () => {
      showToast("Ops! Algo deu errado", "error");
    },
  });

  return (
    <ModalWrapper handleCloseModal={handleCloseModal} open={open}>
      <>
        {isPending ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LoadingContainer />
          </Box>
        ) : (
          <>
            <Typography>Mudança de status do livro</Typography>

            <List
              sx={{ width: "100%", bgcolor: "background.paper" }}
              aria-label="contacts"
            >
              <RenderList
                getKey={({ status }) => status}
                items={mappedStatusBookMark}
                renderItem={({ status, statusLabel }) => (
                  <ListItem>
                    <ListItemButton
                      disabled={status === currentBookStatus}
                      onClick={() => handleChangeBookStatus(status)}
                    >
                      <ListItemIcon>
                        <BookMark status={status} />
                      </ListItemIcon>
                      <ListItemText primary={statusLabel} />
                    </ListItemButton>
                  </ListItem>
                )}
              />
            </List>
          </>
        )}
      </>
    </ModalWrapper>
  );
}
