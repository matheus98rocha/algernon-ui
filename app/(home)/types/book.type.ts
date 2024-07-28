export type Book = {
  id: number;
  book: string;
  description: string;
  author: string;
  status: "wantToRead" | "alreadyRead" | "reading";
};
