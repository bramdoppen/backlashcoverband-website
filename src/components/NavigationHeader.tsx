import Link from "next/link";
import MaxWidth from "./MaxWidth";

export default function NavigationHeader() {
  return (
    <header className="sticky flex h-[60px] w-full text-xl font-bold uppercase md:h-[120px]">
      <MaxWidth>
        <div className="mx-auto my-0 flex h-full items-center justify-center gap-[60px] md:justify-between">
          <div>
            <Link href={"/"}>
              <span>NO CRASH</span>
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex list-none gap-[50px] p-0">
              <li>
                <a
                  href="#muziek"
                  className="relative before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-black before:opacity-0 hover:invert hover:before:opacity-100"
                >
                  <span className="relative">Muziek</span>
                </a>
              </li>
              <li>
                <a
                  href="#over"
                  className="relative before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-black before:opacity-0 hover:invert hover:before:opacity-100"
                >
                  <span className="relative">Over</span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="relative before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-black before:opacity-0 hover:invert hover:before:opacity-100"
                >
                  <span className="relative">Contact</span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="hidden md:block"></div>
        </div>
      </MaxWidth>
    </header>
  );
}
