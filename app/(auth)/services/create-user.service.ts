"use server";

import { Error } from "@/app/common/types/error";
import { post } from "@/app/common/utils/fetchWrapper";
import { redirect } from "next/navigation";
import { createUserFormData } from "../(pages)/auth/signup/components/signup-form/schema/user-signup.schema";
import { authMapper } from "./auth-mapper";

interface UserResponse extends Error {
  data: {
    email: string;
    id: number;
  };
}

export default async function createUser(formData: createUserFormData) {
  const data = authMapper.toPersistenceCreateUser(formData);
  const res = await post<UserResponse>("users", data);

  const isOk = res.data.ok;
  if (!isOk) {
    return {
      message: res.result.message,
      statusCode: res.result.statusCode,
      timestamp: res.result.timestamp,
      path: res.result.path,
    };
  } else {
    redirect("/auth/login");
  }
}
