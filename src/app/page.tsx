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
          <div className='flex flex-col gap-[16px] items-center sm:items-start pb-2'>
            <BestFit />
            <DecentFit />
            <WildCard />
          </div>
        </div>
      </div>
    </div>
  );
}
