import ButtonLink from "./Button";
import Button from "./Button";
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
    <section className="my-container" id="contact">
      <MaxWidth>
        <div className="flex flex-col items-center gap-8 rounded-lg bg-zinc-800 p-10 md:p-20">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-semibold uppercase">
              Backlash op jouw feest?
            </h2>
            <p>
              Wij houden van herrie maken. Dat doen we ook graag op jouw feest!{" "}
            </p>
          </div>
          <span className="flex flex-wrap gap-4">
            <ButtonLink to="mailto:info@backlashcoverband.nl">
              info@backlashcoverband.nl
            </ButtonLink>
            <ButtonLink to="https://www.gigstarter.nl/artists/backlash-coverband">
              Boek via Gigstarter
            </ButtonLink>
          </span>
        </div>
      </MaxWidth>
    </section>
  );
}
