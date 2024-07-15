import { API_URL } from "../constants/api";

export async function fetchWrapper<T = unknown>(
  input: RequestInfo | URL,
  formData: FormData,
  init?: RequestInit | undefined) {
  const data = await fetch(`${API_URL}/${input}`,
    {
      ...init,
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { "Content-Type": "application/json" }
    }
  );

  const result = await data.json();
  return result as T;
}