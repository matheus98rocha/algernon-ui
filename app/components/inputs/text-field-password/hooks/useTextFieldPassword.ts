import { MouseEvent, useCallback, useState } from "react";

export function useTextFieldPassword() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = useCallback((): void => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }, []);

  const handleMouseDownPassword = useCallback(
    (event: MouseEvent<HTMLButtonElement>): void => {
      event.preventDefault();
    },
    []
  );

  return {
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
  };
}
