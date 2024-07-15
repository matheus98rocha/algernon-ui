"use server";

import { Error } from "@/app/types/error";
import { fetchWrapper } from "@/app/utils/fetchWrapper";
import { redirect } from "next/navigation";

interface UserResponse extends Error {
  data: {
    email: string,
    id: number
  };
}

export default async function createUser(
  formData: FormData
){
  const res = await fetchWrapper<UserResponse>('users', formData, {
    method: "POST",
  });
  if (!!res.message) {
    return {
      message: res.message,
      statusCode: res.statusCode,
      timestamp: res.timestamp,
      path: res.path
    }
  } else {
    redirect("/")
  }
} 