import useSWR from "swr";

import { CategoriesResponse } from "./apiTypes";
import { API_URL } from "./urls";

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useCategories = () => {
  const url = `${API_URL}products/category-list`;

  const { data, error, isLoading } = useSWR<CategoriesResponse>(url, fetcher);

  return {
    categories: data,
    isCategoriesLoading: isLoading,
    categoriesError: error,
  };
};
