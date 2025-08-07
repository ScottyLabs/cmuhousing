'use client'

import Image from 'next/image'

export default function FilterHeader({ name, desc, icon }: { name: string, desc: string, icon: string }) {
    return (
        <div className='space-y-2'>
            <div className='flex gap-[12px] items-center'>
                <Image
                    src={icon}
                    alt={name}
                    width={30}
                    height={30}
                    className="w-[30px] h-[30px]"
                />
                <h2 className="font-sans font-semibold text-[16px]">
                    {name}
                </h2>
            </div>
        </div>
    )
}