'use client'

import Image from 'next/image'

import { Building, useBuildingTagsMap } from "@/components/BuildingContext"
import BuildingOption from '@/components/BuildingOption';

export default function TaggedBuildingOption({ building }: { building: Building }) {
    const tagMap = useBuildingTagsMap();

    return (
        <div className='flex flex-col gap-[20px]'>
            <BuildingOption building={building} width={320} height={220} />
            <>
                {building.tags.length > 0 && (
                    <div className='flex flex-col gap-[18px]'>
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
                                        width={34.56}
                                        height={34.56}
                                        className="w-[34.56px] h-[34.56px]"
                                    />
                                    <h2 className="text-[18px]">
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