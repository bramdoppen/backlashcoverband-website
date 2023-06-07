import MaxWidth from "./MaxWidth";
import Image from "next/image";

interface Properties {
  title: string;
  content: any;
  images: any[];
}
interface Props {
  data: Properties;
}

export default function BlockAboutUs({ data }: Props) {
  console.log(data.title, "dta");
  return (
    <section className="my-container">
      <MaxWidth>
        <div className="flex flex-col items-center gap-12">
          <h2 className="text-4xl font-semibold uppercase">{data.title}</h2>
          {/* {data.content} */}
          <div className="flex flex-wrap justify-center gap-8">
            {data.images &&
              data.images.map((image: any, idx) => (
                <Image
                  width={1600}
                  height={900}
                  key={idx}
                  src={
                    image.imageUrl + "?w=1600&h=900&crop=focalpoint&fit=crop"
                  }
                  alt="Bandplayer"
                  priority
                />
              ))}
          </div>
        </div>
      </MaxWidth>
    </section>
  );
}
