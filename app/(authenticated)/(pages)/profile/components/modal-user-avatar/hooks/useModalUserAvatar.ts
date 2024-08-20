import { useUserContext } from "@/app/(authenticated)/contexts/user-context";
import patchUser from "@/app/(authenticated)/services/edit-user.service";
import revalidateTag from "@/app/common/utils/revalidate-tag";
import { useState } from "react";
import { ModalUserAvatarProps } from "../modal-user-avatar.types";

export function useModalUserAvatar({
  handleCloseModal,
}: ModalUserAvatarProps) {
  const { updateAvatarValue, user } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);
  const handleChangeAvatar = (avatarIndex: number) => {
    setIsLoading(true);

    patchUser({ avatar: avatarIndex }).finally(() => {
      updateAvatarValue(avatarIndex);
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
