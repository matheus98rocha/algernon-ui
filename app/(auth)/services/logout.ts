"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { AUTHENTICATION_COOKIE } from "@/app/common/constants/auth-cookie.constant";

export default async function logout() {
  cookies().delete(AUTHENTICATION_COOKIE);
  redirect("/auth/login");
}
