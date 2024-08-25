import { UserPersistence, UserDomain } from "@/app/common/types/user";

import { editUserAvatarDomain, editUserAvatarPersistence } from "./user.types";

class UserMapper {
  toDomainGetUser(userPersistence: UserPersistence): UserDomain {
    return {
      id: userPersistence.id,
      email: userPersistence.email,
      name: userPersistence.name,
      lastName: userPersistence.lastName,
      avatar: userPersistence.avatar ?? 0,
    };
  }
  toPersistenceEditUser(
    editUserAvatarDomain: editUserAvatarDomain,
  ): editUserAvatarPersistence {
    return {
      avatar: editUserAvatarDomain.avatar,
    };
  }
}

export const userMapper = new UserMapper();
