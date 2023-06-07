import Image from "next/image";
import styles from "./PageHeader.module.css";
import headerImage from "../../public/sfeerbeelden/DSC06930.jpg";
import MaxWidth from "./MaxWidth";

export default function PageHeader() {
  return (
    <header className="relative my-container mt-0 flex min-h-[70vh] flex-col items-center justify-center overflow-hidden">
      <MaxWidth>
        <div className="relative z-10 flex flex-col items-center text-white">
          <h1 className="text-6xl font-extrabold uppercase sm:text-8xl md:text-[150px]">
            Backlash
          </h1>
          <strong className=":md-m-[10px] text-4xl font-normal uppercase md:text-[50px]">
            Coverband
          </strong>
        </div>
      </MaxWidth>
      <div className={styles.absoluteContent}>
        <Image
          className={styles.image}
          src={headerImage}
          alt="Bandplayer"
          priority
        />
        <div className="absolute flex w-full">
          <span className="animate-[ticker_20s_-20s_linear_infinite] whitespace-nowrap text-[350px] font-extrabold uppercase text-white opacity-5">
            Backlash Coverband
          </span>
          <span className="animate-[ticker2_20s_-10s_linear_infinite] whitespace-nowrap text-[350px] font-extrabold uppercase text-white opacity-5">
            Backlash Coverband
          </span>
        </div>
      </div>
    </header>
  );
}
