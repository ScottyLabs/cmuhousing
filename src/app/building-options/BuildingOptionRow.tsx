'use client'

import TaggedBuildingOption from "./TaggedBuildingOption";
import { Building } from "@/components/BuildingContext"
import Image from 'next/image'

export default function BuildingOptionRow({ title, icon, icon_alt, buildings }: { title: string, icon: string, icon_alt: string, buildings: Building[] }) {
    return (
        <div className='space-y-2 overflow-x-auto min-w-[300px] max-w-full pb-3'>
            <div className='flex gap-[12px] items-center'>
                <Image
                    src={icon}
                    alt={icon_alt}
                    width={37}
                    height={37}
                    className="w-[37px] h-[37px]"
                />
                <h2 className="font-sans font-semibold text-lg">
                    {title}
                </h2>
            </div>
            <div className="flex gap-[12px] ">
                {buildings.map(b => (<TaggedBuildingOption key={b.id} building={b} />))}
            </div>
        </div>
    );
}