import "./globals.css";
import { Anybody } from "next/font/google";

export const metadata = {
  title: "Backlash Coverband - Rock, Pop, Alternative",
  description:
    "Covers van o.a. Foo Fighters, 3 Doors Down, U2, Green Day, The Killers op jouw feestje? Dat kan!",
};

const baseFont = Anybody({
  weight: ["300", "400", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={baseFont.className}>
      <body>{children}</body>
    </html>
  );
}
