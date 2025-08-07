import Image from "next/image";
import { BestFit, DecentFit, WildCard } from "@/components/BuildingRowsDemo";
import BuildingFilter from "@/components/BuildingFilter";

export default function Home() {
  return (
    <div className="flex h-full px-5">
      <div className="flex-shrink-0">
        <BuildingFilter />
      </div>

      <div className='flex-1 flex flex-col px-5 overflow-hidden'>
        <h1 className="font-sans font-bold text-[24px] py-3 flex-shrink-0">
          All Building Options
        </h1>
        <div className="flex-1 overflow-y-auto">
          <div className='flex flex-col gap-[32px] items-center sm:items-start'>
            <div className='space-y-2'>
              <div className='flex gap-[12px] items-center'>
                <Image
                  src="/sparkle.svg"
                  alt="sparkle"
                  width={37}
                  height={37}
                  className="w-[37px] h-[37px]"
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
                  className="w-[37px] h-[37px]"
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
                  className="w-[37px] h-[37px]"
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
      </div>
    </div>
  );
}
