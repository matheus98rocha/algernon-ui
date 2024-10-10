export type ButtonLoadingProps<T = any> = {
  isLoading: boolean;
  type: "button" | "submit" | "reset" | undefined;
  buttonText: string;
  onClick?: (param: T) => void; // Parâmetro genérico
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
};
