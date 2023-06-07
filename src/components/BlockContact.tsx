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

export default function BlockContact() {
  return (
    <section className="my-container">
      <MaxWidth>
        <div className="flex flex-col items-center gap-4 rounded-lg bg-zinc-800 p-20">
          <h2 className="text-4xl font-semibold uppercase">
            Backlash op jouw feest?
          </h2>
          <p>Neem contact op en informeer naar de mogelijkheden.</p>
          <span className="flex gap-4">
            <a className="underline" href="mailto:info@backlashcoverband.nl">
              info@backlashcoverband.nl
            </a>
            <a className="underline" href="https://wa.me/+31640521978">
              of Stuur een appje
            </a>
          </span>
        </div>
      </MaxWidth>
    </section>
  );
}
