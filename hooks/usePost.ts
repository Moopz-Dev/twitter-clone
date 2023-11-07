import useSWR from "swr";
import fetcher from "@/libs/fetcher";

export default function usePost(postId: string) {
  const url = postId ? `/api/posts/${postId}` : null;
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
}
