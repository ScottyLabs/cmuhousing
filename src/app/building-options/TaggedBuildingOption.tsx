'use client'

import Image from 'next/image'

import { Building, useBuildingTagsMap } from "@/components/BuildingContext"
import BuildingOption from '@/components/BuildingOption';

export default function TaggedBuildingOption({ building }: { building: Building }) {
    const tagMap = useBuildingTagsMap();

    return (
        <div className='flex flex-col gap-4'>
            <BuildingOption building={building} width={250} height={170} />
            <>
                {building.tags.length > 0 && (
                    <div className='flex flex-col gap-4'>
                        {building
                            .tags
                            .map(id => {
                                const someTag = tagMap.get(id);
                                if (someTag === undefined) {
                                    throw new Error(`Building ${building.name} contains invalid tag: ${id}`)
                                }
                                return someTag;
                            })
                            .map(tag => (
                                <div key={tag.id} className='flex gap-[5px] items-center'>
                                    <Image
                                        src={tag.icon}
                                        alt={tag.label}
                                        width={22}
                                        height={22}
                                        className="w-[22px] h-[22px]"
                                    />
                                    <h2 className="text-[14px]">
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