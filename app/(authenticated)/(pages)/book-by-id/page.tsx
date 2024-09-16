import React from "react";

import Image from "next/image";
import { notFound } from "next/navigation";

import { getBookById } from "../../services/books/book.service";

import BackButton from "./components/back-button/back-button.component";

type BookByIdParams = {
  searchParams: {
    id: string;
  };
};

async function BookById({ searchParams }: BookByIdParams) {
  const { id } = searchParams;

  const bookByIdData = await getBookById(id);

  if (bookByIdData.book.length === 0) {
    notFound();
  }

  return (
    <div>
      <BackButton />
      <ul>
        <Image
          alt="book image by id"
          src={bookByIdData["imageUrl"]}
          width={148}
          height={223}
        />
        <li>{bookByIdData["book"]}</li>
        <li>{bookByIdData["author"]}</li>
        <li>{bookByIdData["description"]}</li>
      </ul>
    </div>
  );
}

export default BookById;
