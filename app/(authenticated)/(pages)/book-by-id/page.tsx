import React from "react";

import Image from "next/image";
import { notFound } from "next/navigation";

import { BackButton } from "../../components";
import { getBookById } from "../../services/books/book.service";

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
      <BackButton isBack={true} />
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
