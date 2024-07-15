'use server'

import { Error } from "@/app/types/error";
import { fetchWrapper } from "@/app/utils/fetchWrapper"
import { handleError } from "@/app/utils/handleError";

interface LoginUserResponse extends Error{}

export default async function loginUser(formData: FormData) {
  const res = await fetchWrapper<LoginUserResponse>('auth/login', formData, {
    method: "POST",
  });
  console.log(res)
  handleError(res);
}