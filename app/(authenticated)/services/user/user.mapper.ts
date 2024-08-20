import { UserPersistence, UserDomain } from "@/app/common/types/user";

class UserMapper {
  toPersistenceUser(userPersistence: UserPersistence): UserDomain {
    return {
      id: userPersistence.id,
      email: userPersistence.email,
      name: userPersistence.name,
      lastName: userPersistence.lastName,
      avatar: userPersistence.avatar ?? 0,
    };
  }
}

export const userMapper = new UserMapper();
