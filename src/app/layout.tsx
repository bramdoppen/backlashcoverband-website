import Script from "next/script";
import "./globals.css";
import { Anybody } from "next/font/google";

export const metadata = {
  title: "NO CRASH Coverband - Rock, Pop, Alternative",
  description:
    "Covers van o.a. Foo Fighters, 3 Doors Down, U2, Green Day, The Killers op jouw feestje? Informeer naar de mogelijkheden!",
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
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.GA_MEASUREMENT_ID}');
        `}
      </Script>
      <body>{children}</body>
    </html>
  );
}
