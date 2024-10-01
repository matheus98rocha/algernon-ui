"use client";
import React, { useState } from "react";

import { Card, CardContent, Typography } from "@mui/material";
import Skeleton from "@mui/material/Skeleton"; // Import do Skeleton do Material-UI

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { NotAvaibleImage, RenderList } from "@/app/common/components";

import { BackButton, CreateBookModal, SearchInput } from "../../components";
import { getBooksOnGoogleApi } from "../../services/books/book.service";
import { BooksGoogleApiPersistence } from "../../services/books/book.types";
import { createFallbackArray } from "../../utils/create-fallback-array";

import { WrapperBooksList } from "./creat-book-grid.styles";

type GoogleBookListProps = {
  bookName: string;
};

export function CreatBookGrid({ bookName }: GoogleBookListProps) {
  const router = useRouter();
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

  const fallbackItems = createFallbackArray();

  return (
    <>
      <CreateBookModal
        book={selectedBook}
        open={isOpenCreateBookModal}
        handleClose={() => setIsOpenCreateBookModal(false)}
      />
      <BackButton handleGoBack={() => router.push("/")} />
      <SearchInput />
      <WrapperBooksList>
        {!isFetched ? (
          <RenderList
            getKey={(item) => item.id}
            items={fallbackItems}
            renderItem={() => (
              <Skeleton variant="rectangular" width={300} height={450} />
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
                    height: 450,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setIsOpenCreateBookModal(true);
                    setSelectedBook({
                      ...item,
                    });
                  }}
                >
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {item.title}
                  </Typography>
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
                    <Typography
                      gutterBottom
                      variant="subtitle2"
                      component="div"
                    >
                      {item.authors}
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
