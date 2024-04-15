import BlockWithBandMembers from "@/components/BlockWithBandMembers";
import NavigationHeader from "@/components/NavigationHeader";
import PageHeader from "@/components/PageHeader";
import BlockAboutUs from "@/components/BlockAboutUs";
import BlockContact from "@/components/BlockContact";
import { cache } from "react";
import BlockWithSongs from "@/components/BlockWithSongs";
import sanityClient from "./sanityClient";

const clientFetch = cache(sanityClient.fetch.bind(sanityClient));

export default async function Home() {
  const bandMemberData = await clientFetch(`*[_type == "bandmember"]{
    firstName,
    instrument,
    image
  }`);
  const songData =
    await clientFetch(`*[ _type == 'song' && !archivedSong && !(_id in path("drafts.**"))]| order(artist asc, title asc) {
      title,
      artist
    }
  `);
  const aboutUsData = await clientFetch(`*[_type == "homepage"] {
    about {
      title,
      content,
      images[]
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
      <footer>
        <div className="container mx-auto px-4 py-8">
          <div className="mx-auto flex h-full text-neutral-600 sm:items-center sm:justify-center">
            <ul className="flex flex-col gap-1 text-xs font-bold sm:flex-row sm:gap-8">
              <li>Copyright NO CRASH Coverband, 2024</li>
              <li>Fotografie door Marit Pleune en Studio Savan</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
