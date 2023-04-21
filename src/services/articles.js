import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//articleapi have missing some properties
//inject.endpoint errors happen due to upper statement

//this is how we use .env file in code of redux
const rapidapikey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;
const rapidapihost = import.meta.env.VITE_RAPID_API_HOST;

// steps to create api in reduxtoolkit
// 1 specify the reducerPath.
// 2 specify the baseQuery which takes fetchBaseQuery() method and inside that an object
export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (header) => {
      header.set("X-RapidAPI-Key", rapidapikey);
      header.set("X-RapidAPI-Host", rapidapihost);
      return header;
    },
  }),

  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) =>
        `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi;
