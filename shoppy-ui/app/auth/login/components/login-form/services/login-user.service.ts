'use server'

import { Error } from "@/app/types/error";
import { fetchWrapper } from "@/app/utils/fetchWrapper"
import { redirect } from "next/navigation";

interface LoginUserResponse extends Error { }

export default async function loginUser(formData: FormData) {
  const res = await fetchWrapper<LoginUserResponse>('auth/login', formData, {
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