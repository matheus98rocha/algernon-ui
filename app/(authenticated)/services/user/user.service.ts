"use server";

import { UserDomain, UserPersistence } from "@/app/common/types/user";
import { get } from "@/app/common/utils/fetchWrapper";
import { userMapper } from "./user.mapper";

export default async function getUserDetails(): Promise<UserDomain> {
  const userLoggedId = await get<{ userId: number; iat: number; exp: number }>(
    "users/me",
  );
  const data = await get<UserPersistence>(
    `users/by-id/${userLoggedId.userId}`,
    ["user-details"],
  );

  return userMapper.toPersistenceUser(data); // Mudança aqui
}
