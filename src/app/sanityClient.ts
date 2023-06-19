import { createClient } from "next-sanity";

const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: "2023-02-25",
  useCdn: true,
});

export default sanityClient;
