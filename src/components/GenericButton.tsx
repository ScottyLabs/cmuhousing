"use client";

import Image from "next/image";

export enum ButtonVariants {
    Gray,
    Orange
}

export default function GenericButton({
    name,
    nameSize,
    icon,
    style
}: {
    name: string;
    nameSize: number;
    icon: string;
    style: ButtonVariants;
}) {
    return (
        <div
            className={`px-[43.5px] py-[16px] h-full rounded-[18px] border select-none cursor-pointer ${
                style === ButtonVariants.Orange
                    ? "bg-brand-primary text-white"
                    : "transition-colors duration-200 bg-brand-menugray hover:bg-gray-200 border-black/10"
            }`}>
            <div className="flex gap-2 items-center h-full" style={{ fontSize: `${nameSize}px` }}>
                <Image
                    src={icon}
                    alt={name}
                    width={24}
                    height={24}
                    className={`w-[24px] h-[24px] ${style === ButtonVariants.Orange ? "brightness-0 invert" : "brightness-100"}`}
                />
                {name}
            </div>
        </div>
    );
}
