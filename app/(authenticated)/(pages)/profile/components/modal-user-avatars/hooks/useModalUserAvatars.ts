import { useState } from "react";

import { patchUserAvatar } from "@/app/(authenticated)/services/user/user.service";
import revalidateTag from "@/app/common/utils/revalidate-tag";

import { ModalUserAvatarsProps } from "../modal-user-avatars.types";
import { useStore } from "@/app/(authenticated)/store/store";

export function useModalUserAvatars({
  handleCloseModal,
}: ModalUserAvatarsProps) {
  const { setUser, user } = useStore();
  const [isLoading, setIsLoading] = useState(false);
  const handleChangeAvatar = (avatarIndex: number) => {
    setIsLoading(true);

    patchUserAvatar({ avatar: avatarIndex }).finally(() => {
      setUser({
        ...user,
        avatar: avatarIndex,
      });
      revalidateTag("user-details").finally(() => {
        setIsLoading(false);
        handleCloseModal();
      });
    });
  };

  const verifyIfUserHasAvatar = (index: number) =>
    user.avatar && user.avatar !== 0 && user.avatar - 1 === index;
  return {
    isLoading,
    handleChangeAvatar,
    verifyIfUserHasAvatar,
  };
}
