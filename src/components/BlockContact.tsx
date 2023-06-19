import ButtonLink from "./Button";
import MaxWidth from "./MaxWidth";

export default function BlockContact() {
  return (
    <section className="my-container last:mb-0" id="contact">
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
            <ButtonLink
              to="https://www.gigstarter.nl/artists/backlash-coverband"
              target="_blank"
            >
              Boek via Gigstarter ↗
            </ButtonLink>
          </span>
        </div>
      </MaxWidth>
    </section>
  );
}
