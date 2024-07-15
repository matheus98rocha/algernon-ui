import { API_URL } from "../constants/api";

export async function fetchWrapper<T = unknown>(
  input: RequestInfo | URL,
  formData: FormData,
  init?: RequestInit | undefined
): Promise<T> {
  const response = await fetch(`${API_URL}/${input}`, {
    ...init,
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: { "Content-Type": "application/json" }
  });

  console.log(response)

  const result = await response.json();
  return result as T;
}
