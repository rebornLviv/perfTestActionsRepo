import useSWR from "swr";

import { Product } from "./apiTypes";
import { API_URL } from "./urls";

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useProduct = (id: string) => {
  const url = `${API_URL}products/${id}`;

  const { data, error, isLoading } = useSWR<Product>(url, fetcher);

  return {
    productData: data,
    isProductLoading: isLoading,
    productError: error,
  };
};
