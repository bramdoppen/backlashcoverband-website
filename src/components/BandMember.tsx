import Image from "next/image";

export interface BandMemberProperties {
  _key?: string;
  firstName: string;
  instrument?: string;
  imageUrl?: string;
}

export default function BandMember({
  firstName,
  instrument,
  imageUrl,
}: BandMemberProperties) {
  return (
    <div className="flex w-full min-w-[300px] max-w-[400px] flex-col gap-y-4 rounded-md bg-zinc-800 p-5 shadow-md sm:w-auto sm:flex-1">
      {imageUrl && (
        <div className="relative overflow-hidden rounded-md">
          <Image
            className="h-auto w-full sm:w-auto"
            src={imageUrl + "?w=800&h=800&crop=focalpoint&fit=crop"}
            width={400}
            height={400}
            alt="Bandplayer"
            priority
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
