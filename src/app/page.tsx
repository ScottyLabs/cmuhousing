import Image from "next/image";
import { BestFit, DecentFit, WildCard } from "@/components/BuildingRowsDemo";

export default function Home() {
  return (
    <main>
      <div className='px-10'>
        <h1 className="font-sans font-bold text-[24px] py-3">
          All Building Options
        </h1>
        <div className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
          <div className='space-y-2'>
            <div className='flex gap-[12px] items-center'>
              <Image
                src="/sparkle.svg"
                alt="sparkle"
                width={37}
                height={37}
              />
              <h2 className="font-sans font-bold text-lg">
                Best Fit for You
              </h2>
            </div>
            <BestFit />
          </div>
          <div className='space-y-2'>
            <div className='flex gap-[12px] items-center'>
              <Image
                src="/slight-smile.svg"
                alt="slight smile"
                width={37}
                height={37}
              />
              <h2 className="font-sans font-bold text-lg">
                Decent Fit
              </h2>
            </div>
            <DecentFit />
          </div>
          <div className='space-y-2'>
            <div className='flex gap-[12px] items-center'>
              <Image
                src="/wildcard.svg"
                alt="wild card"
                width={37}
                height={37}
              />
              <h2 className="font-sans font-bold text-lg">
                Wild Card
              </h2>
            </div>
            <WildCard />
          </div>
          <div className='space-y-2' />
        </div>
      </div>
    </main>
  );
}
