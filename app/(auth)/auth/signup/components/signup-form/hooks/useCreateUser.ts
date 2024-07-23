import { useForm } from "react-hook-form";
import {
  createUserFormData,
  createUserFormSchema,
} from "../schema/user-signup.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateUserFormReturn } from "../signup-form.types";
import { useState } from "react";
import createUser from "../services/create-user.service";

export function useCreateUserForm(): useCreateUserFormReturn {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm<createUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  const onSubmit = async (data: createUserFormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("password", data.password);

    setIsLoading(true);
    const response = await createUser(formData).finally(() =>
      setIsLoading(false)
    );

    // Verificando se o objeto foi enviado incorretamente.
    if (
      (response && response.statusCode === 400) ||
      (response && response.statusCode === 500)
    ) {
      setError("root", {
        message: "Ops... Algo deu errado, tente novamente mais tarde.",
        type: "validate",
      });
    }

    // Verificando sem o e-mail já existe
    if (response && response.statusCode === 422) {
      setError("email", {
        message: response.message,
        type: "validate",
      });
    }
  };

  return {
    handleSubmit,
    onSubmit,
    register,
    errors,
    watch,
    isLoading,
  };
}
