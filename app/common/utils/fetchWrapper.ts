import { cookies } from "next/headers";
import { API_URL } from "../constants/api";
type fetchWrapperResponse = {
  data: Response;
  result: any;
};

const getHeader = () => ({
  Cookie: cookies().toString(),
});

export async function post<T = unknown>(
  input: RequestInfo | URL,
  formData: FormData,
  init?: RequestInit | undefined
): Promise<fetchWrapperResponse> {
  const data = await fetch(`${API_URL}/${input}`, {
    ...init,
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: { "Content-Type": "application/json" },
  });
  const result = await data.json();
  return {
    data: data,
    result: result as T,
  };
}

export const get = async <T>(
  path: string,
  params?: Record<string, any>,
  tags?: string[]
): Promise<T> => {
  const url = new URL(`${API_URL}/${path}`);
  if (params) {
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
  }
  const res = await fetch(url.toString(), {
    headers: { ...getHeader() },
    next: {
      tags,
    },
    cache: "no-store",
  });

  return res.json() as T;
};

export async function authPost<T = unknown>(
  input: RequestInfo | URL,
  formData: FormData,
  init?: RequestInit | undefined
): Promise<fetchWrapperResponse> {
  const data = await fetch(`${API_URL}/${input}`, {
    ...init,
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: { ...getHeader(), "Content-Type": "application/json" },
  });
  const result = await data.json();
  return {
    data: data,
    result: result as T,
  };
}
