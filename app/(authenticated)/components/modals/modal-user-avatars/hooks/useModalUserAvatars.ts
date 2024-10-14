import { useMutation } from "@tanstack/react-query";

import { patchUserAvatar } from "@/app/(authenticated)/services/user/user.service";
import { useStore } from "@/app/(authenticated)/store/store";
import revalidateTag from "@/app/common/utils/revalidate-tag";

import { ModalUserAvatarsProps } from "../modal-user-avatars.types";

export function useModalUserAvatars({
  handleCloseModal,
}: ModalUserAvatarsProps) {
  const { setUser, user } = useStore();

  const { mutate: handleChangeAvatar, isPending: isLoading } = useMutation({
    mutationFn: (avatarIndex: number) =>
      patchUserAvatar({ avatar: avatarIndex }).finally(() => {
        setUser({
          ...user,
          avatar: avatarIndex,
        });
      }),
    onSuccess: () => {
      revalidateTag("user-details");
      handleCloseModal();
    },
  });

  const verifyIfUserHasAvatar = (index: number) =>
    user.avatar && user.avatar !== 0 && user.avatar - 1 === index;
  return {
    isLoading,
    handleChangeAvatar,
    verifyIfUserHasAvatar,
  };
}
