import { useMemo } from "react";
import MaxWidth from "./MaxWidth";
import ButtonLink from "./Button";

interface Song {
  _key?: string;
  title: string;
  artist: string;
}

interface Properties {
  songs: Array<Song>;
}

function SongRenderer({ artist, title }: Song) {
  return (
    <div className="flex flex-col border-b-2 py-4 md:[&:nth-of-type(1)]:border-t-2">
      <strong className="text-lg font-bold">{title}</strong>
      <span className="font-light">{artist}</span>
    </div>
  );
}

function arrayToChuncks(size: number, array: Array<Song>) {
  const chuncedArray = [];
  const chunkSize = size || 6;
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    chuncedArray.push(chunk);
    // do whatever
  }
  return chuncedArray;
}

export default function BlockWithSongs({ songs }: Properties) {
  const totalPlayLength: number = useMemo(() => songs.length * 3.35, [songs]);
  if (!songs) return <></>;
  const chunckedSongs = arrayToChuncks(6, songs);
  return (
    <section className="my-container" id="muziek">
      <MaxWidth>
        <div className="flex flex-col items-center gap-12">
          <div className="mx-auto flex max-w-2xl flex-col gap-6 sm:items-center sm:text-center">
            <div className="flex flex-col gap-1">
              <h2 className="text-4xl font-semibold uppercase">Repertoire</h2>
              <strong className="text-xl">
                {songs.length} nummers, goed voor zeker{" "}
                {Math.round(totalPlayLength)} minuten
              </strong>
            </div>
            <p>
              Met een afwisselende set van nummers brengen we de perfecte sfeer.
              Van meezingers tot verrassende hits – wij zorgen voor de ideale
              balans om elk publiek in beweging te krijgen!
            </p>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-2 sm:justify-center">
              <strong>Benieuwd geworden?</strong>
              <span className="flex flex-1 flex-wrap gap-4 whitespace-nowrap">
                <ButtonLink to="#contact">
                  Neem vrijblijvend contact op
                </ButtonLink>
              </span>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 justify-center gap-x-8 md:grid-cols-2">
            {chunckedSongs.map((chunk: Array<Song>, idx) => (
              <div
                className="flex flex-col [&:not(:nth-child(1))]:mt-20 [&:nth-child(even)]:md:mt-[10.8rem] [&:nth-child(odd)]:md:mt-0 "
                key={idx}
              >
                {chunk.map((song: Song) => (
                  <SongRenderer
                    key={song._key}
                    artist={song.artist}
                    title={song.title}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </MaxWidth>
    </section>
  );
}
