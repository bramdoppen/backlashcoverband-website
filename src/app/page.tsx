import BlockWithBandMembers from "@/components/BlockWithBandMembers";
import NavigationHeader from "@/components/NavigationHeader";
import PageHeader from "@/components/PageHeader";
import BlockAboutUs from "@/components/BlockAboutUs";
import BlockContact from "@/components/BlockContact";
import { createClient, groq } from "next-sanity";
import { cache } from "react";
import BlockWithSongs from "@/components/BlockWithSongs";

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: "2023-02-25",
  useCdn: false,
});

const clientFetch = cache(client.fetch.bind(client));

export default async function Home() {
  const bandMemberData = await clientFetch(`*[_type == "bandmember"]{
    firstName,
    instrument,
    "imageUrl": image.asset->url
  }`);
  const songData =
    await clientFetch(`*[ _type == 'song' && !(_id in path("drafts.**"))] {
      title,
      artist
    }
  `);
  const aboutUsData = await clientFetch(`*[_type == "homepage"] {
    about {
      title,
      content,
      images[] {
        "imageUrl": asset->url
      }
    }
  }[0]`);
  return (
    <>
      <NavigationHeader />
      <main>
        <PageHeader />
        <BlockAboutUs data={aboutUsData.about} />
        <BlockWithBandMembers bandMembers={bandMemberData} />
        <BlockWithSongs songs={songData} />
        <BlockContact />
      </main>
    </>
  );
}
