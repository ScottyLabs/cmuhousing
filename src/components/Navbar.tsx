'use client'

import Link from "next/link";
import Image from 'next/image'
import NavButton from "./NavButton";
import GenericButton from "./GenericButton";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname()

    return (
        <div className="flex items-center justify-between w-full px-8 py-3">
            <Link href="/">
                <Image
                    src="/logo.svg"
                    alt="CMU Housing"
                    width={168}
                    height={28}
                    className="w-[168px] h-[28px]"
                />
            </Link>

            <div className="flex gap-8 items-center">
                <NavButton href="/" name="Home" icon="/home.svg" isActive={pathname === "/"} />
                <div className="h-4 w-0.5 bg-black/10" />
                <NavButton href="/building_options" name="All Building Options" icon="/all-buildings.svg" isActive={pathname === "/building_options"} />
                <div className="h-4 w-0.5 bg-black/10" />
                <NavButton href="/building_comparison" name="Building Comparison" icon="/comparison.svg" isActive={pathname === "/building_comparison"} />
                <div className="h-4 w-0.5 bg-black/10" />
                <NavButton href="/map" name="Campus Map" icon="/map.svg" isActive={pathname === "/map"} />
                <div className="h-4 w-0.5 bg-black/10" />
                <NavButton href="/roommates" name="Roommates" icon="/person.svg" isActive={pathname === "/roommates"} />
            </div>

            <div className="flex gap-8 items-center">
                <GenericButton name="Share with friends!" icon="/share.svg" />
                <Link href="/profile">
                    <Image
                        src="/profile.svg"
                        alt="profile"
                        width={40}
                        height={40}
                        className="rounded-full w-[40px] h-[40px]"
                    />
                </Link>
            </div>
        </div>
    );
}