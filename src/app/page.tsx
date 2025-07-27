import Image from "next/image";
import { Schibsted_Grotesk } from "next/font/google";

const schibsted = Schibsted_Grotesk({
  variable: '--font-schibsted',
  subsets: ['latin'],
  weight: ['700'],
})

export default function Home() {
  return (
    <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
      <h1 className={`${schibsted.variable} font-sans font-bold text-[24px]`}>
        All Building Options
      </h1>
      <div className='flex gap-[12px] items-center'>
        <Image
          src="/sparkle.svg"
          alt="sparkle"
          width={37}
          height={37}
          priority
        />
        <h2 className={`${schibsted.variable} font-sans font-bold text-lg `}>
          Best Fit for You
        </h2>
      </div>
      <div className='flex gap-[12px] items-center'>
        <Image
          src="/slight-smile.svg"
          alt="slight smile"
          width={37}
          height={37}
          priority
        />
        <h2 className={`${schibsted.variable} font-sans font-bold text-lg `}>
          Decent Fit
        </h2>
      </div>
    </main>
  );
}
