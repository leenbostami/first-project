import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/users" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/",
    }),
  }),
});
export const { useGetUsersQuery } = userApi;
