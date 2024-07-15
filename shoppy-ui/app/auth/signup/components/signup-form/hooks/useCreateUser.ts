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

  const handleGetError = useCallback((error: string) => {
    if (error.includes("Email")) {
      setError("email", {
        message: error,
        type: 'validate',
      })
    }
  },[])

  const onSubmit = async (data: createUserFormData) => {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);

    setIsLoading(true)
    const res = await createUser(formData).finally(() => setIsLoading(false));
    console.log("->",res)
    console.log("->", res?.message)
    // if (res && res.error) {
    //   if (res.error.includes("Email")) {
    //     setError("email", {
    //       message: res.error,
    //       type: 'validate',
    //     })
    //   }
    // }
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