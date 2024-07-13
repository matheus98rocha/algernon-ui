import { ValidationProps } from "../ValidatePassword.types";

type useValidationPasswordReturn = {
  validationItems: {
    condition: boolean;
    text: string;
  }[]
}

export function useValidationPassword({ password }: ValidationProps): useValidationPasswordReturn {
  const hasMinimumLength = password.length >= 8;
  const hasMinimumLowercase = /[a-z]/.test(password);
  const hasMinimumUppercase = /[A-Z]/.test(password);
  const hasMinimumNumbers = /[0-9]/.test(password);
  const hasMinimumSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const validationItems = [
    {
      condition: hasMinimumLength,
      text: "Minimum of 8 characters"
    },
    {

      condition: hasMinimumLowercase,
      text: "At least 1 lowercase letter"
    },
    {
      condition: hasMinimumUppercase,
      text: "At least 1 uppercase letter"
    },
    {
      condition: hasMinimumNumbers,
      text: "At least 1 number"
    },
    {
      condition: hasMinimumSymbols,
      text: "At least 1 special symbol"
    }
  ]

  return {
    validationItems
  }
}