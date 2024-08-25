"use server";

import { UserDomain, UserPersistence } from "@/app/common/types/user";
import { authPatch, get } from "@/app/common/utils/fetchWrapper";
import revalidateTag from "@/app/common/utils/revalidate-tag";

import { userMapper } from "./user.mapper";
import { editUserAvatarDomain } from "./user.types";

export async function getUserDetails(): Promise<UserDomain> {
  const userLoggedId = await get<{ userId: number; iat: number; exp: number }>(
    "users/me",
  );
  const data = await get<UserPersistence>(
    `users/by-id/${userLoggedId.userId}`,
    ["user-details"],
  );

  return userMapper.toDomainGetUser(data); // Mudança aqui
}

export async function patchUserAvatar(data: editUserAvatarDomain) {
  const mappedData = userMapper.toPersistenceEditUser(data);
  const res = await authPatch(`users/update-avatar`, mappedData);

  if (!!res.result.message) {
    return {
      message: res.result.message,
      statusCode: res.result.statusCode,
      timestamp: res.result.timestamp,
      path: res.result.path,
    };
  } else {
    revalidateTag("user-details");
    return {
      message: "Success",
      statusCode: 200,
    };
  }
}
