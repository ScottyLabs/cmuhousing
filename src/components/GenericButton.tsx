'use client'

import Image from 'next/image'

export default function GenericButton({ name, icon }: { name: string, icon: string }) {
    return (
        <div className={"px-4 py-2 rounded-xl font-medium transition-colors duration-200 bg-brand-menugray hover:bg-gray-200 border border-black/10  "}
        >
            <div className="flex gap-2 items-center">
                <Image
                    src={icon}
                    alt={name}
                    width={14}
                    height={14}
                    className="w-[14px] h-[14px]"
                />
                {name}
            </div>

        </div>
    );
}