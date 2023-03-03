import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "d7iqsqyc",
    dataset: "production",
    apiVersion: "2023-01-07",
    useCdn: false
  });