import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginFormReturn } from "../login-form.types";
import { useState } from "react";
import { loginUserFormData, loginUserFormSchema } from "../schema/user-login.schema";
import loginUser from "../services/login-user.service";

export function useLoginUserForm(): useLoginFormReturn {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<loginUserFormData>({
    resolver: zodResolver(loginUserFormSchema),
  });

  const onSubmit = async (data: loginUserFormData) => {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);

    setIsLoading(true)
    const response = await loginUser(formData).finally(() => setIsLoading(false));
    if (response && response.message) {
      setError("password", {
        message: response.message
      })
    }
  };
  return {
    handleSubmit,
    onSubmit,
    register,
    errors,
    isLoading
  }
}