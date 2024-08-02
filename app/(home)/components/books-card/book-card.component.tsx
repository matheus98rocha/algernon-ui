import React from "react";
import { Book as BookProps } from "../../types/book.type";
import * as S from "./book-card.styles";
import Image from "next/image";

function BookCard({ author, book }: BookProps) {
  return (
    <S.WrapperBookCard>
      <S.BookTitle variant="h6">{book}</S.BookTitle>
      <Image
        src={
          "https://books.google.com/books/content?id=_oG_iTxP1pIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }
        alt={"book image"}
        width={100}
        height={150}
        loading="eager"
      />
      <S.BookAuthor variant="body2">{author}</S.BookAuthor>
    </S.WrapperBookCard>
  );
}

export default BookCard;
