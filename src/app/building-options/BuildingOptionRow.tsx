'use client'

import TaggedBuildingOption from "./TaggedBuildingOption";
import { Building } from "@/components/BuildingContext"
import Image from 'next/image'
import Link from "next/link";

export default function BuildingOptionRow({ title, icon, icon_alt, buildings, see_more }: { title: string, icon: string, icon_alt: string, buildings: Building[], see_more: boolean }) {
    return (
        <div className='overflow-x-auto min-w-[300px] max-w-full'>
            <div className='flex gap-[12px] items-center pb-[23px]'>
                <Image
                    src={icon}
                    alt={icon_alt}
                    width={37}
                    height={37}
                    className="w-[37px] h-[37px]"
                />
                <h2 className="font-semibold text-[24px]">
                    {title}
                </h2>
            </div>
            <div className="flex gap-[24px] ">
                {buildings.map(b => (<TaggedBuildingOption key={b.id} building={b} />))}
                {see_more && (
                    <Link href="/building-options" className="flex flex-col items-center rounded-2xl bg-brand-menugray justify-center border border-black/10 transition-colors duration-200 hover:bg-gray-200 cursor-pointer" style={{ width: 320, height: 220 }}>
                        <Image
                            src="/all-buildings-colored.svg"
                            alt="all buildings"
                            width={38}
                            height={38}
                            className="w-[38px] h-[38px]"
                        />
                        <div className="font-semibold text-black text-[24px] w-full text-center ">
                            See More
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
}