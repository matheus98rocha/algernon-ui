import { queryClient } from "../global-provider";

export function useRefetchQuerie() {
  const handleResetQuerie = (querieKey: string) => {
    queryClient.resetQueries({
      queryKey: [querieKey],
    });
  };

  const handleInavalidateQuerie = (querieKey: string) => {
    queryClient.invalidateQueries({
      queryKey: [querieKey],
    });
  };

  return {
    handleResetQuerie,
    handleInavalidateQuerie,
  };
}
