import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { API_URL } from "../constants/api";

type FetchWrapperResponse = {
  data: Response;
  result: any;
};

const getHeader = () => ({
  Cookie: cookies().toString(),
  "Content-Type": "application/json",
});

type HTTPMethod = "GET" | "POST" | "PATCH" | "DELETE";

export async function request<T = unknown>({
  method,
  input,
  body,
  init,
  tags,
  params,
}: {
  method: HTTPMethod;
  input: RequestInfo | URL;
  body?: Record<string, any> | FormData | undefined;
  init?: RequestInit | undefined;
  tags?: string[];
  params?: Record<string, any>;
}): Promise<FetchWrapperResponse> {
  const url = new URL(`${API_URL}/${input}`);

  if (params) {
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key]),
    );
  }

  console.log("reqeust", url);

  const isFormData = body instanceof FormData;
  const bodyContent = isFormData
    ? JSON.stringify(Object.fromEntries(body))
    : JSON.stringify(body);

  try {
    const response = await fetch(url.toString(), {
      ...init,
      method,
      body: method !== "GET" && body ? bodyContent : undefined,
      headers: { ...getHeader() },
      cache: method === "GET" ? "no-store" : undefined,
      next: method === "GET" ? { tags } : undefined,
    });

    const contentType = response.headers.get("Content-Type") || "";

    let result: T | undefined;
    if (contentType.includes("application/json")) {
      result = (await response.json()) as T;
    }

    return {
      data: response,
      result,
    };
  } catch (error) {
    console.error(`Erro ao fazer ${method}:`, error);
    if (method === "GET") {
      redirect("/error");
    }
    throw error;
  }
}
