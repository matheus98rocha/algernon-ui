import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import createUser from "../../../../../../services/create-user.service";
import {
  createUserFormData,
  createUserFormSchema,
} from "../schema/user-signup.schema";
import { useCreateUserFormReturn } from "../signup-form.types";

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
    setIsLoading(true);
    const response = await createUser(data).finally(() => setIsLoading(false));

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
