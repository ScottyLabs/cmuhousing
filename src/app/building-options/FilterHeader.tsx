"use client";

import Image from "next/image";

export default function FilterHeader({ name, desc, icon }: { name: string; desc: string; icon: string }) {
    return (
        <div className="w-full">
            <div className="flex gap-[12px] items-center">
                <Image src={icon} alt={name} width={38.4} height={38.4} className="w-[38.4px] h-[38.4px]" />
                <div className="h-fit">
                    <h2 className="font-semibold text-[18px] leading-none">{name}</h2>
                    {desc && <h3 className="text-gray-500 text-[12px] leading-none pt-1">{desc}</h3>}
                </div>
            </div>
        </div>
    );
}
