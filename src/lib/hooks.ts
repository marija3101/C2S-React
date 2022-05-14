import useSWR from "swr";
import { fetcher } from "./fetcher";

export const useTasks = () => {
  const { data, error } = useSWR("tasks", fetcher);
  return {
    tasks: data,
    error,
    isLoading: !data && !error,
  };
};
