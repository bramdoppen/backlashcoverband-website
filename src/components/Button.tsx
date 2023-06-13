import Link from "next/link";
import { Children } from "react";

interface Properties {
  to: string;
  children: React.ReactNode;
}

export default function ButtonLink({ children, to }: Properties) {
  return (
    <Link
      className="leading-1 w-full rounded-lg bg-white px-6 py-4 pb-3 text-center font-bold text-black hover:invert sm:w-auto"
      href={to}
    >
      {children}
    </Link>
  );
}
