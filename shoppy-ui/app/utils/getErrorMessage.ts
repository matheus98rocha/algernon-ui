interface ResponseType {
  message?: string | string[];
}

import { formatErrorMessage } from "./formatErrorMessage";

export const getErrorMessage = (response: ResponseType): string => {
  if (response.message) {
    if (Array.isArray(response.message)) {
      return formatErrorMessage(response.message[0]);
    }
    return formatErrorMessage(response.message);
  }

  return "Unknown error occurred.";
}
