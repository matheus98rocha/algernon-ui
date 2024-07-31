// src/validation/passwordValidation.ts

export function validatePassword(password: string) {
  const hasMinimumLength = password.length >= 8;
  const hasMinimumLowercase = /[a-z]/.test(password);
  const hasMinimumUppercase = /[A-Z]/.test(password);
  const hasMinimumNumbers = /[0-9]/.test(password);
  const hasMinimumSymbols = /[!@#$%^&*(),.?":{}|<>_]/.test(password);

  return {
    hasMinimumLength,
    hasMinimumLowercase,
    hasMinimumUppercase,
    hasMinimumNumbers,
    hasMinimumSymbols,
  };
}
