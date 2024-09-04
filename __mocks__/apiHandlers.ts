import { http, HttpResponse, PathParams } from "msw";

import { apiMocks } from "./apiMocks";
import { API_URL } from "../api/urls";

export const apiHandlers = [
  http.get<PathParams<"skip">>(`${API_URL}products`, async ({ request }) => {
    const skipParam = new URL(request.url).searchParams.get("skip");

    if (skipParam === "12") {
      return HttpResponse.json(apiMocks.productsAllPage2);
    }

    return HttpResponse.json(apiMocks.productsAllPage1);
  }),
  http.get(`${API_URL}products/category/laptops`, () => {
    return HttpResponse.json(apiMocks.productsCategoryLaptops);
  }),
  http.get(`${API_URL}products/category-list`, () => {
    return HttpResponse.json(apiMocks.productCategories);
  }),
  http.get(`${API_URL}products/1`, () => {
    return HttpResponse.json(apiMocks.products1);
  }),
];
