import Link from "next/link";
import MaxWidth from "./MaxWidth";

export default function NavigationHeader() {
  return (
    <header className="sticky flex h-[60px] w-full text-xl font-bold uppercase md:h-[120px]">
      <MaxWidth>
        <div className="mx-auto my-0 flex h-full items-center justify-center gap-[60px] md:justify-between">
          <div>
            <Link href={"/"}>
              <span>Backlash</span>
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex list-none gap-[50px] p-0">
              <li>Muziek</li>
              <li>Over</li>
              <li>Contact</li>
            </ul>
          </nav>
          <div className="hidden md:block"></div>
        </div>
      </MaxWidth>
    </header>
  );
}
