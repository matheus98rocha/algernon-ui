'use server'

import { AUTHENTICATION_COOKIE } from "@/app/common/constants/auth-cookie.constant";
import { Error } from "@/app/common/types/error";
import { post } from "@/app/common/utils/fetchWrapper";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface LoginUserResponse extends Error { }

export default async function loginUser(formData: FormData) {
  const res = await post<LoginUserResponse>('auth/login', formData);

  if (!!res.result.message) {
    return {
      message: res.result.message,
      statusCode: res.result.statusCode,
      timestamp: res.result.timestamp,
      path: res.result.path
    }
  } else {
    setAuthCookie(res.data)
    redirect("/")
  }
}

const setAuthCookie = (response: Response) => {
  const setCookieHeader = response.headers.get("set-cookie");

  if (setCookieHeader) {
    const token = setCookieHeader.split(';')[0].split('=')[1];

    cookies().set({
      name: AUTHENTICATION_COOKIE,
      value: token,
      secure: true,
      httpOnly: true,
      expires: new Date(jwtDecode(token).exp! * 1000),
    })
  }
}