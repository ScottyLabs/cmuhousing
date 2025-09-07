'use client'

import { useBuildingById } from "@/components/BuildingContext";
import BuildingOption from "@/components/BuildingOption";
import Image from 'next/image'
import Link from "next/link";

export default function BuildingPanelDemo() {
    const recommended_buildings = [
        useBuildingById('stever'),
        useBuildingById('morewood'),
        useBuildingById('mudge'),
        useBuildingById('etower'),
        useBuildingById('donner')]

    return (
        <div className='space-y-4 overflow-x-auto min-w-[300px] max-w-full pb-3'>
            <div className='flex gap-[12px] items-center'>
                <h2 className="font-semibold text-[24px]">
                    Recommended Buildings
                </h2>
            </div>
            <div className="flex gap-[12px] ">
                {recommended_buildings.slice(0, 3).map(b => (<BuildingOption key={b.id} building={b} width={419.79} height={286.33} />))}
            </div>
            <div className="flex gap-[12px] ">
                {recommended_buildings.slice(3, 5).map(b => (<BuildingOption key={b.id} building={b} width={419.79} height={286.33} />))}
                <Link href="/building-options" className="flex flex-col items-center rounded-lg bg-brand-menugray justify-center border border-black/10 transition-colors duration-200 hover:bg-gray-200 cursor-pointer" style={{ width: 419.79, height: 286.33 }}>
                    <Image
                        src="/all-buildings-colored.svg"
                        alt="all buildings"
                        width={48}
                        height={48}
                        className="w-[48px] h-[48px]"
                    />
                    <div className="font-semibold text-black text-[24px] w-full text-center ">
                        See all Buildings
                    </div>
                </Link>
            </div>
        </div>
    );
}
