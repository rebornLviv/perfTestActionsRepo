import useSWR from "swr";

import { ProductsResponse } from "./apiTypes";
import { API_URL } from "./urls";
import { SelectOption } from "../components/Select";

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

type UseProductsParams = {
  skip: number;
  limit: number;
  category: SelectOption["value"];
};
export const useProducts = ({ skip, limit, category }: UseProductsParams) => {
  const filters = `?limit=${limit}&skip=${skip}`;

  const url = category
    ? `${API_URL}products/category/${category}${filters}`
    : `${API_URL}products${filters}`;

  const { data, error, isLoading } = useSWR<ProductsResponse>(url, fetcher);

  return {
    productsData: data,
    isProductsLoading: isLoading,
    productsError: error,
  };
};
