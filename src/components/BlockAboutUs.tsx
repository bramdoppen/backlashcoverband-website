import MaxWidth from "./MaxWidth";
import Image from "next/image";
import urlFor from "./SourceSetImage";
import ButtonLink from "./Button";

interface Properties {
  title: string;
  content: any;
  images: any[];
}
interface Props {
  data: Properties;
}

export default function BlockAboutUs({ data }: Props) {
  return (
    <section className="my-container">
      <MaxWidth>
        <div className="flex flex-col items-center gap-12">
          <div className="mx-auto grid grid-cols-1 items-start gap-6 text-left sm:grid-cols-3">
            <div className="flex flex-col gap-1">
              <h2 className="text-4xl font-semibold uppercase">{data.title}</h2>
            </div>
            <div className="col-span-2 flex flex-col gap-6 text-left">
              <p>
                Wij zijn NO CRASH, een enthousiaste coverband uit regio Arnhem
                met een passie voor rockmuziek. Ons repertoire varieert van
                stevige rockklassiekers tot populaire popnummers, met af en toe
                een uitstapje naar wat hardere rock. Al 3 jaar maken we samen
                muziek en hebben we een geweldige mix van nummers opgebouwd. We
                zijn klaar om ervaring op te doen en jouw feest onvergetelijk te
                maken!
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
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {data.images &&
              data.images.map((image: any, idx) => (
                <Image
                  width={1600}
                  height={900}
                  key={idx}
                  src={urlFor(image).width(1600).height(900).url()}
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
