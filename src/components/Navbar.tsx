"use client";

import Link from "next/link";
import Image from "next/image";
import NavButton from "./NavButton";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div className="overflow-x-auto w-full">
            <div className="flex items-center justify-between min-w-[1600px] h-[100px] px-[26px] whitespace-nowrap">
                <Link href="/" className="relative min-w-[168px] min-h-[28px]">
                    <img src="/logo.svg" alt="CMU Housing" className="w-[168px] h-[28px]" />
                </Link>

                <div className="flex gap-[16px] items-center">
                    <NavButton
                        href="/building-options"
                        name="All Building Options"
                        icon="/all-buildings.svg"
                        isActive={pathname === "/building-options"}
                    />
                    <div className="flex h-[47px] w-[9px] items-center justify-center">
                        <div className="h-[18px] w-[0px] border-black/20 border-1 rounded-full"></div>
                    </div>
                    <NavButton
                        href="/building-comparison"
                        name="Building Comparison"
                        icon="/comparison.svg"
                        isActive={pathname === "/building-comparison"}
                    />
                    <div className="flex h-[47px] w-[9px] items-center justify-center">
                        <div className="h-[18px] w-[0px] border-black/20 border-1 rounded-full"></div>
                    </div>
                    <NavButton href="/map" name="Campus Map" icon="/map.svg" isActive={pathname === "/map"} />
                    <div className="flex h-[47px] w-[9px] items-center justify-center">
                        <div className="h-[18px] w-[0px] border-black/20 border-1 rounded-full"></div>
                    </div>
                    <NavButton
                        href="/roommates"
                        name="Roommates"
                        icon="/person.svg"
                        isActive={pathname === "/roommates"}
                    />
                </div>

                <div className="flex gap-[14px] items-center">
                    {/* TODO: add share link */}
                    <Link
                        href="/"
                        className="py-3 px-6 h-full rounded-2xl border select-none cursor-pointer transition-colors duration-200 bg-brand-menugray hover:bg-gray-200 border-black/10">
                        <div className="flex gap-2 items-center h-full">
                            <img src="/share.svg" alt="Share Icon" className="brightness-100" />
                            <p className="text-lg">Share with friends!</p>
                        </div>
                    </Link>
                    <Link href="/profile">
                        <Image
                            src="/profile.svg"
                            alt="profile"
                            width={52}
                            height={52}
                            className="rounded-full w-[52px] h-[52px]"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}
