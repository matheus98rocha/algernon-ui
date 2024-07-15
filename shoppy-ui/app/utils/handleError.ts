import { redirect } from "next/navigation"
import { Error } from "../types/error"

export function handleError(res: Error) {
  if (!!res.message) {
    return {
      error: res.message,
      status: res.statusCode
    }
  } else {
    redirect("/")
  }
}