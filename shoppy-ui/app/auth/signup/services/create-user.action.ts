"use server";

import { fetchWrapper } from "@/app/utils/fetchWrapper";
import { getErrorMessage } from "@/app/utils/getErrorMessage";
import { redirect } from "next/navigation";

interface UserResponse {

  message?: string,
  error?: string,
  statusCode?: number

  data: {
    email: string,
    id: number
  };
}

export default async function createUser(
  _prevState: any,
  formData: FormData
) {
  const res = await fetchWrapper<UserResponse>('users', {
    method: "POST",
    body: formData,
  });
  console.log(res)
  if (res.error) {
    return {
      error: getErrorMessage(res)
    }
  } else {
    redirect("/")
  }
} 