"use server";

import { UserDomain, UserPersistence } from "@/app/common/types/user";
import { request } from "@/app/common/utils/request";
import revalidateTag from "@/app/common/utils/revalidate-tag";

import { userMapper } from "./user.mapper";
import { editUserAvatarDomain } from "./user.types";

export async function getUserDetails(): Promise<UserDomain> {
  try {
    // Primeira requisição para obter o ID do usuário logado
    const userLoggedId = await request<{
      userId: number;
      iat: number;
      exp: number;
    }>({
      method: "GET",
      input: "users/me",
      body: undefined,
      init: undefined,
      tags: ["user-details"],
    });

    // Segunda requisição para obter os detalhes do usuário pelo ID
    const data = await request<UserPersistence>({
      method: "GET",
      input: `users/by-id/${userLoggedId.result.userId}`,
      body: undefined,
      init: undefined,
      tags: ["user-details"],
    });

    // Mapeia os dados recebidos para o domínio da aplicação
    return userMapper.toDomainGetUser(data.result);
  } catch (error) {
    throw new Error("Não foi possível buscar os detalhes do usuário.");
  }
}

export async function patchUserAvatar(data: editUserAvatarDomain) {
  try {
    const mappedData = userMapper.toPersistenceEditUser(data);

    const res = await request({
      method: "PATCH",
      input: `users/update-avatar`,
      body: mappedData,
    });

    // Verifica se há uma mensagem de resultado no response
    if (!!res.result?.message) {
      return {
        message: res.result.message,
        statusCode: res.result.statusCode,
        timestamp: res.result.timestamp,
        path: res.result.path,
      };
    } else {
      revalidateTag("user-details");
      return {
        message: "Success",
        statusCode: 200,
      };
    }
  } catch (error) {
    throw new Error("Não foi possível atualizar o avatar do usuário.");
  }
}
