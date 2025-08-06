'use client'

import Image from 'next/image'

import { Building, useTagById } from "./BuildingContext"

export default function BuildingOption({ building }: { building: Building }) {
    return (
        <div className='flex flex-col gap-4'>
            <div className="relative w-[240] h-[165] overflow-hidden rounded-lg">
                <Image
                    src={building.image}
                    alt={building.name}
                    fill
                />
                <div className="
                    absolute 
                    inset-x-0 
                    bottom-0 
                    h-24
                    bg-gradient-to-t 
                    from-black/50
                    to-transparent
                    pointer-events-none
                " />

                <div className="
                    font-sans 
                    absolute 
                    bottom-0 
                    left-0 
                    m-2 
                    text-white 
                    text-px[24]
                    px-6 py-2 
                    rounded
                ">
                    {building.name}
                </div>
            </div>
            <>
                {building.tags.length > 0 && (
                    <div className='flex flex-col gap-4'>
                        {building
                            .tags
                            .map(id => useTagById(id))
                            .map(tag => (
                                <div key={tag.id} className='flex gap-[5px] items-center'>
                                    <Image
                                        src={tag.icon}
                                        alt={tag.label}
                                        width={28.75}
                                        height={28.75}
                                    />
                                    <h2 className="font-sans text-px[18] font-medium">
                                        {tag.label}
                                    </h2>
                                </div>
                            ))
                        }
                    </div>
                )}
            </>
        </div>
    )
}