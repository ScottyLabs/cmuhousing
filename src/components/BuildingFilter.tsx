'use client'

import Image from 'next/image'
import FilterHeader from './FilterHeader'

export default function BuildingFilter() {
    return (
        <div className='flex-1 flex flex-col px-5 overflow-hidden bg-gray-100 rounded-xl w-[250px] h-[87vh] px-4 py-4'>
            <div className="flex items-center justify-between w-full flex-shrink-0">
                <h2 className="font-sans font-bold text-lg">Filter by...</h2>
                <Image
                    src="/hide-sidebar.svg"
                    alt="hide sidebar"
                    width={16}
                    height={16}
                    className="w-[16px] h-[16px]"
                />
            </div>
            <div className="flex-1 overflow-y-auto">
                <div className="flex flex-col gap-[32px] items-center sm:items-start">
                    <FilterHeader name="Distance from" desc="" icon="/distance.svg" />
                </div>
            </div>
        </div>
    )
}