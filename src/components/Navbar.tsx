'use client'

import Link from "next/link";
import Image from 'next/image'
import NavButton from "./NavButton";
import GenericButton from "./GenericButton";
import { ButtonVariants } from "./GenericButton";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname()

    return (
        <div className="overflow-x-auto w-full">
            <div className="flex items-center justify-between min-w-[1400px] xl:min-w-[1600px] pb-3 px-8 py-3 whitespace-nowrap">
                <Link href="/" className="relative min-w-[168px] min-h-[28px]">
                    <Image
                        src="/logo.svg"
                        alt="CMU Housing"
                        width={168}
                        height={28}
                        className="w-[168px] h-[28px]"
                    />
                </Link>

                <div className="flex gap-2 xl:gap-8 items-center px-6">
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
                    <div>
                        <GenericButton name="Share with friends!" nameSize={16} icon="/share.svg" style={ButtonVariants.Gray} />
                    </div>
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
        </div>
    );
}