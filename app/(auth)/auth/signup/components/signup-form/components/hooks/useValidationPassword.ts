import { ValidationProps } from "../validate-password.types";

type useValidationPasswordReturn = {
  validationItems: {
    condition: boolean;
    text: string;
  }[];
};

export function useValidationPassword({
  password,
}: ValidationProps): useValidationPasswordReturn {
  const hasMinimumLength = password.length >= 8;
  const hasMinimumLowercase = /[a-z]/.test(password);
  const hasMinimumUppercase = /[A-Z]/.test(password);
  const hasMinimumNumbers = /[0-9]/.test(password);
  const hasMinimumSymbols = /[!@#$%^&*(),.?":{}|<>_]/.test(password);

  const validationItems = [
    {
      condition: hasMinimumLength,
      text: "Mínimo de 8 caracteres",
    },
    {
      condition: hasMinimumLowercase,
      text: "Pelo menos 1 letra minúscula",
    },
    {
      condition: hasMinimumUppercase,
      text: "Pelo menos 1 letra maiúscula",
    },
    {
      condition: hasMinimumNumbers,
      text: "Pelo menos 1 número",
    },
    {
      condition: hasMinimumSymbols,
      text: "Pelo menos 1 símbolo especial",
    },
  ];

  return {
    validationItems,
  };
}
