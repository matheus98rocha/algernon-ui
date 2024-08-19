"use server";

import { authPatch } from "@/app/common/utils/fetchWrapper";
import { revalidateTag } from "next/cache";

export default async function patchUser(avatar: { avatar: number }) {
  const res = await authPatch(`users/update-avatar`, avatar);

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
