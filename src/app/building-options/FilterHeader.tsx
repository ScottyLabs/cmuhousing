'use client'

import Image from 'next/image'

export default function FilterHeader({ name, desc, icon }: { name: string, desc: string, icon: string }) {
    return (
        <div className='space-y-2 w-full'>
            <div className='flex gap-[12px] items-center'>
                <Image
                    src={icon}
                    alt={name}
                    width={30}
                    height={30}
                    className="w-[30px] h-[30px]"
                />
                <div className="h-fit">
                    <h2 className="font-semibold text-[16px] leading-none">
                        {name}
                    </h2>
                    {desc && (
                        <h3 className="text-gray-500 text-[10px] leading-none pt-1">
                            {desc}
                        </h3>
                    )}
                </div>
            </div>
        </div>
    )
}