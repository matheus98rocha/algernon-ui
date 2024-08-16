"use server";

import { User } from "@/app/common/types/user";
import { get } from "@/app/common/utils/fetchWrapper";

export default async function getUserDetails(): Promise<User> {
  const userLoggedId = await get<{ userId: number; iat: number; exp: number }>(
    "users/me",
  );
  return await get<User>(`users/by-id/${userLoggedId.userId}`, [
    "user-details",
  ]);
}
