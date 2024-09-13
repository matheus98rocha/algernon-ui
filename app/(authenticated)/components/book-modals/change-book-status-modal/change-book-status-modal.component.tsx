import React, { useCallback, useState } from "react";
import ModalWrapper from "@/app/common/components/modal-wrapper/modal-wrapper.layout";
import { Box, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BookMark from "../../bookmark/book-mark.component";
import { BookStatus } from "@/app/common/types/book.type";
import { patchBookStatus } from "@/app/(authenticated)/services/books/book.service";
import LoadingComponent from "@/app/common/components/loading/loading-component/loading-component";
import { RenderList } from "@/app/common/components/list/list.component";
import { useRouter } from "next/navigation";

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

function ChangeBookStatusModal({
  handleCloseModal,
  open,
  currentBookStatus,
  bookId,
}: ChangeBookStatusModalProps) {
  const [isLoading, setIsLoading] = useState(false);

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

  const handleChangeBookStatus = useCallback(
    (status: BookStatus) => {
      setIsLoading(true);
      patchBookStatus(status, bookId).finally(() => {
        setIsLoading(false);
        handleCloseModal();
        handlePageChange(status);
      });
    },
    [bookId, handleCloseModal, handlePageChange],
  );

  return (
    <ModalWrapper handleCloseModal={handleCloseModal} open={open}>
      <>
        {isLoading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LoadingComponent />
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

export default ChangeBookStatusModal;
