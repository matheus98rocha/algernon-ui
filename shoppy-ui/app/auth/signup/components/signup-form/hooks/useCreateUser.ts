import { useForm } from "react-hook-form";
import { createUserFormData, createUserFormSchema } from "../schema/user-signup.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateUserFormReturn } from "../signup-form.types";
import { useCallback, useState } from "react";
import createUser from "../services/create-user.service";

export function useCreateUserForm(): useCreateUserFormReturn {
  const [isLoading, setIsLoading] = useState<boolean>(false)

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

    setIsLoading(true)
    const response = await createUser(formData).catch(error=> console.log(error)).finally(() => setIsLoading(false));
    if (response && response.message) {
      setError("email", {
        message: response.message,
        type: 'validate',
      })
    }
  };

  return {
    handleSubmit,
    onSubmit,
    register,
    errors,
    watch,
    isLoading
  }
}