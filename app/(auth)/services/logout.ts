"use server";
import { AUTHENTICATION_COOKIE } from "@/app/common/constants/auth-cookie.constant";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function logout() {
  cookies().delete(AUTHENTICATION_COOKIE);
  redirect("/auth/login");
}
