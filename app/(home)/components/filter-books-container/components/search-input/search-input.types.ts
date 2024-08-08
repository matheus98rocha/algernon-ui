import { BookStatus } from "@/app/(home)/types/book.type";

export type SearchInputProps = {
  setBookName: (value: string) => void;
  bookName: string;
  statusQt: number;
  bookStatus: BookStatus;
  isFavorite: boolean;
};
