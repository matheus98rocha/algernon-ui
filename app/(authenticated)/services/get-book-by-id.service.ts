import { Book } from "@/app/common/types/book.type";
import { get } from "@/app/common/utils/fetchWrapper";

export async function getBookById(id: string): Promise<Book> {
  const resp = await get<Book>(`books/get-by-id/${id}`, ["book-by-id"]);
  return resp;
}
