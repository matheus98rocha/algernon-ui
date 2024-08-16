import { validatePassword } from "../../validations/strong-password.validation";
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
  const {
    hasMinimumLength,
    hasMinimumLowercase,
    hasMinimumUppercase,
    hasMinimumNumbers,
    hasMinimumSymbols,
  } = validatePassword(password);

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
