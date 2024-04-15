import Script from "next/script";
import ButtonLink from "./Button";
import MaxWidth from "./MaxWidth";

export default function BlockContact() {
  return (
    <section className="my-container last:mb-0" id="contact">
      <MaxWidth>
        <div className="flex flex-col items-center gap-8 rounded-lg bg-zinc-800 p-10 md:p-20">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-semibold uppercase">
              NO CRASH op jouw feest?
            </h2>
            <p>
              Wij houden van herrie maken. Dat doen we ook graag op jouw feest!{" "}
            </p>
          </div>
          <span className="flex flex-wrap gap-4">
            <ButtonLink to="mailto:info@nocrash.nl">info@nocrash.nl</ButtonLink>

            <div
              className="gigstarter-button"
              data-slug="backlash-coverband"
              data-version="1"
            >
              <a
                href="https://www.gigstarter.nl/artists/backlash-coverband"
                target="_blank"
              >
                <img
                  src="https://gigstarter.s3.amazonaws.com/boek_ons.png"
                  alt="Boek NO CRASH Coverband: Rock en pop covers voor elk feest!"
                />
              </a>
            </div>

            <Script id="show-gigstarter-button">
              {`(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//gigstarter.s3.amazonaws.com/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'gigstarter-sdk'));`}
            </Script>
          </span>
        </div>
      </MaxWidth>
    </section>
  );
}
