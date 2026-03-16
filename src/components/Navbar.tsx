"use client";

import Link from "next/link";
import Image from "next/image";
import NavButton from "./NavButton";
import { usePathname } from "next/navigation";
import NavbarSpacer from "./NavbarSpacer";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div className="overflow-x-auto w-full">
            <div className="flex items-center justify-between min-w-[1600px] h-[100px] px-[26px] whitespace-nowrap">
                <Link href="/" className="relative min-w-[168px] min-h-[28px]">
                    <Image src="/logo.svg" alt="CMU Housing" width={168} height={28} className="w-[168px] h-[28px]" />
                </Link>

                <div className="flex gap-[16px] items-center">
                    <NavButton href="/" name="Home" icon="/home.svg" isActive={pathname === "/"} />
                    <NavbarSpacer left_nbr_path="/" right_nbr_path="/building-options" pathname={pathname} />
                    <NavButton
                        href="/building-options"
                        name="All Building Options"
                        icon="/all-buildings.svg"
                        isActive={pathname === "/building-options"}
                    />
                    <NavbarSpacer
                        left_nbr_path="/building-options"
                        right_nbr_path="/building-comparison"
                        pathname={pathname}
                    />
                    <NavButton
                        href="/building-comparison"
                        name="Building Comparison"
                        icon="/comparison.svg"
                        isActive={pathname === "/building-comparison"}
                    />
                    <NavbarSpacer left_nbr_path="/building-comparison" right_nbr_path="/map" pathname={pathname} />
                    <NavButton href="/map" name="Campus Map" icon="/map.svg" isActive={pathname === "/map"} />
                    <NavbarSpacer left_nbr_path="/map" right_nbr_path="/roommates" pathname={pathname} />
                    <NavButton
                        href="/roommates"
                        name="Roommates"
                        icon="/person.svg"
                        isActive={pathname === "/roommates"}
                    />
                </div>

                <div className="flex gap-[14px] items-center">
                    {/* TODO: add share link */}
                    <Link href="/" className="py-3 px-6 h-full rounded-2xl border select-none cursor-pointer transition-colors duration-200 bg-brand-menugray hover:bg-gray-200 border-black/10">
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
