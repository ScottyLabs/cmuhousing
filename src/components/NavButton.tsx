"use client";

import Link from "next/link";

export default function NavButton({
    href,
    name,
    icon,
    isActive
}: {
    href: string;
    name: string;
    icon: string;
    isActive: boolean;
}) {
    return (
        <Link
            href={href}
            className={`
                p-3 flex rounded-2xl transition-colors duration-200 items-center justify-center
                ${isActive ? "bg-brand-primary text-white" : "hover:bg-gray-100"}
            `}>
            <div className="flex gap-2 items-center text-lg h-full">
                <img src={icon} alt={`${name} Icon`} className={isActive ? "brightness-0 invert" : "brightness-100"} />
                {name}
            </div>
        </Link>
    );
}
