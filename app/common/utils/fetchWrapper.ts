import { cookies } from "next/headers";
import { API_URL } from "../constants/api";
import { redirect } from "next/navigation";
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
  init?: RequestInit | undefined,
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
  tags?: string[],
): Promise<T> => {
  const url = new URL(`${API_URL}/${path}`);

  if (params) {
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key]),
    );
  }

  try {
    const res = await fetch(url.toString(), {
      headers: { ...getHeader() },
      next: {
        tags,
      },
    });
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status} - ${res.statusText}`);
    }

    return (await res.json()) as T;
  } catch (error) {
    redirect("/error");
  }
};

export async function authPost<T = unknown>(
  input: RequestInfo | URL,
  formData: FormData,
  init?: RequestInit | undefined,
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

export async function authPatch<T = unknown>(
  input: RequestInfo | URL,
  newValues: any,
  init?: RequestInit | undefined,
): Promise<fetchWrapperResponse> {
  try {
    const response = await fetch(`${API_URL}/${input}`, {
      ...init,
      method: "PATCH",
      body: JSON.stringify(newValues),
      headers: { ...getHeader(), "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    const contentType = response.headers.get("Content-Type") || "";

    let result: T;
    if (contentType.includes("application/json")) {
      result = (await response.json()) as T;
    } else {
      throw new Error("A resposta não está no formato JSON esperado.");
    }

    return {
      data: response,
      result: result,
    };
  } catch (error) {
    console.error("Erro ao fazer patch:", error);
    throw error;
  }
}
