import Image from "next/image";
import urlFor from "./SourceSetImage";

export interface BandMemberProperties {
  _key?: string;
  firstName: string;
  instrument?: string;
  image?: any;
}

export default function BandMember({
  firstName,
  instrument,
  image,
}: BandMemberProperties) {
  return (
    <div className="flex w-full flex-col gap-y-4 rounded-md bg-zinc-800 p-4 shadow-md sm:w-auto">
      {image && (
        <div className="relative overflow-hidden rounded-md">
          <Image
            className="h-auto w-full"
            src={urlFor(image).width(800).height(800).url()}
            width={400}
            height={400}
            alt="Bandplayer"
          />
        </div>
      )}
      <div className="flex flex-col text-center">
        <strong>{firstName}</strong>
        {instrument && <span>{instrument}</span>}
      </div>
    </div>
  );
}
