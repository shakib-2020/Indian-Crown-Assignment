// src/redux/api/productApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mealsApi = createApi({
  reducerPath: "mealsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.themealdb.com/api/json/v1/1/",
  }),
  endpoints: (builder) => ({
    getMeals: builder.query({
      query: (categoryName: string) => `/filter.php?c=${categoryName}`,
    }),
  }),
});

export const { useGetMealsQuery } = mealsApi;
