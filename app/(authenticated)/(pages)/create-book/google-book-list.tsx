"use client";
import React, { useState } from "react";

import { Card, CardContent, Typography } from "@mui/material";
import Skeleton from "@mui/material/Skeleton"; // Import do Skeleton do Material-UI

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

import { NotAvaibleImage, RenderList } from "@/app/common/components";

import { CreateBookModal } from "../../components";
import { getBooksOnGoogleApi } from "../../services/books/book.service";
import { BooksGoogleApiPersistence } from "../../services/books/book.types";

import { WrapperBooksList } from "./google-book-list.styles";

type GoogleBookListProps = {
  bookName: string;
};

export function GoogleBookList({ bookName }: GoogleBookListProps) {
  const [isOpenCreateBookModal, setIsOpenCreateBookModal] =
    useState<boolean>(false);

  const [selectedBook, setSelectedBook] = useState<BooksGoogleApiPersistence>({
    title: "",
    description: "",
    bookImage: "",
    authors: "",
  });

  const { data, isFetched } = useQuery({
    queryFn: async () => getBooksOnGoogleApi(bookName),
    queryKey: ["google-book-api", bookName], // Adiciona bookName à queryKey
  });

  const fallbackItems = Array.from({ length: 3 }, (_, index) => ({
    id: index,
  }));

  return (
    <>
      <CreateBookModal
        book={selectedBook}
        open={isOpenCreateBookModal}
        handleClose={() => setIsOpenCreateBookModal(false)}
      />
      <WrapperBooksList>
        {!isFetched ? (
          <RenderList
            getKey={(item) => item.id}
            items={fallbackItems}
            renderItem={() => (
              <Skeleton variant="rectangular" width={300} height={60} />
            )}
          />
        ) : (
          <RenderList
            getKey={(item) => item.title}
            items={data ?? []}
            renderItem={(item) => {
              return (
                <Card
                  sx={{
                    width: 300,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "16px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setIsOpenCreateBookModal(true);
                    setSelectedBook({
                      ...item,
                    });
                  }}
                >
                  {item.bookImage === "" ||
                  item.bookImage === "No image available" ? (
                    <NotAvaibleImage />
                  ) : (
                    <Image
                      src={item.bookImage}
                      alt="book image"
                      width={148}
                      height={223}
                      loading="eager"
                    />
                  )}
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                  </CardContent>
                </Card>
              );
            }}
          />
        )}
      </WrapperBooksList>
    </>
  );
}
