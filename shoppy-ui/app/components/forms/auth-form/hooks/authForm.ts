import { useForm } from "react-hook-form";
import { createUserFormData, createUserFormSchema } from "../schema/user-signup.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import createUser from "../services/create-user.action";
import { AuthFormProps, useAuthFormReturn } from "../auth-form.types";
import { useState } from "react";

export function useAuthForm({ type }: AuthFormProps): useAuthFormReturn {
  const isSignup = type === 'signup';
  const [isLoadingSignup, setIsLoadingSignup] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch
  } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  const onSubmit = async (data: createUserFormData) => {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);

    if (isSignup) {
      setIsLoadingSignup(true)
      const res = await createUser(formData).finally(() => setIsLoadingSignup(false));
      if (res && res.error) {
        if (res.error.includes("Email")) {
          setError("email", {
            message: res.error,
            type: 'validate',
          })
        }
      }
    } else {
      // Lógica de login aqui
    }
  };
  return {
    isSignup,
    handleSubmit,
    onSubmit,
    register,
    errors,
    watch,
    isLoadingSignup
  }
}