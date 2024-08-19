import { User } from "@/app/common/types/user";
import { createContext, useContext, useEffect, useState } from "react";
import getUserDetails from "../services/get-user-details.service";

// Crie o contexto com o tipo User e isLoading
export const UserContext = createContext<{ user: User; isLoading: boolean }>({
  user: {
    email: "",
    id: 0,
    name: "",
    lastName: "",
  },
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
  });
  const [isLoading, setIsLoading] = useState(true); // Alterado para true

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
    <UserContext.Provider value={{ user, isLoading }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error(
      "useUserContext must be used within an AuthenticatedProviders"
    );
  }

  return context;
};
