import { queryClient } from "@/app/global-provider";

export const prefetchQuery = async (key: string) => {
  await queryClient.prefetchQuery({
    queryKey: [key],
  });
};
