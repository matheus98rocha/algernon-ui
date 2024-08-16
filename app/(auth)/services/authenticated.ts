import { AUTHENTICATION_COOKIE } from "@/app/common/constants/auth-cookie.constant";
import { cookies } from "next/headers";

export default function authenticated() {
  return !!cookies().get(AUTHENTICATION_COOKIE)?.value;
}
