import { create } from "zustand";

import { UserDomain } from "@/app/common/types/user";

type UserState = {
  user: UserDomain;
  isLoading: boolean;
  setUser: (user: UserDomain) => void;
  setLoading: (isLoading: boolean) => void;
};

const useUserStore = create<UserState>((set) => ({
  user: {
    email: "",
    id: 0,
    name: "",
    lastName: "",
    avatar: 0,
  },
  isLoading: true,
  setUser: (user) => set(() => ({ user })),
  setLoading: (isLoading) => set(() => ({ isLoading })),
}));

export default useUserStore;
