'use client'

import Image from 'next/image'

export default function BuildingFilter() {
    return (
        <div className='bg-gray-100 rounded-xl w-[250px] h-[87vh] px-4 py-4'>
            <div className="flex items-center justify-between w-full">
                <h2 className="font-sans font-bold text-lg">Filter by...</h2>
                <Image
                    src="/hide-sidebar.svg"
                    alt="hide sidebar"
                    width={16}
                    height={16}
                    className="w-[16px] h-[16px]"
                />
            </div>
        </div>
    )
}