import { User } from "@/app/common/types/user";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import getUserDetails from "../services/get-user-details.service";

// Crie o contexto com o tipo User e isLoading
export const UserContext = createContext<{
  user: User;
  updateAvatarValue: (avatarIndex: number) => void;
  isLoading: boolean;
}>({
  user: {
    email: "",
    id: 0,
    name: "",
    lastName: "",
    avatar: 0,
  },
  updateAvatarValue: () => {},
  isLoading: true, // Alterado para true
});

type ProvidersProps = {
  children: React.ReactNode;
};

export default function AuthenticatedProvider({ children }: ProvidersProps) {
  const [user, setUser] = useState<User>({
    email: "",
    id: 0,
    name: "",
    lastName: "",
    avatar: 0,
  });
  const [isLoading, setIsLoading] = useState(true); // Alterado para true

  const updateAvatarValue = useCallback((avatarIndex: number) => {
    setUser((prevUser) => ({ ...prevUser, avatar: avatarIndex }));
  }, []);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userDetails = await getUserDetails();

        setUser(userDetails);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <UserContext.Provider value={{ user, updateAvatarValue, isLoading }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error(
      "useUserContext must be used within an AuthenticatedProviders",
    );
  }

  return context;
};
