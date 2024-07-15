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
) {
  try{

    const res = await fetchWrapper<UserResponse>('users', formData, {
      method: "POST",
    });
    return res;
  }catch(err){
    console.log(err)
    throw err
  }
} 