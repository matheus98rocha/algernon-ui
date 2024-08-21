import { createUserFormData } from "../(pages)/auth/signup/components/signup-form/schema/user-signup.schema";
import { CreateUserPersistence } from "./auth-types";

class AuthMapper {
  toPersistenceCreateUser(domain: createUserFormData): FormData {
    const mappedOjbect: CreateUserPersistence = {
      name: domain.name,
      lastName: domain.lastName,
      email: domain.email,
      password: domain.password,
    };

    const formData = new FormData();

    formData.append("name", mappedOjbect.name);
    formData.append("lastName", mappedOjbect.lastName);
    formData.append("email", mappedOjbect.email);
    formData.append("password", mappedOjbect.password);

    return formData;
  }
}

export const authMapper = new AuthMapper();
