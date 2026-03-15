"use client";

import Link from "next/link";
import Image from "next/image";
import NavButton from "./NavButton";
import GenericButton from "./GenericButton";
import { ButtonVariants } from "./GenericButton";
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
                    <div>
                        <GenericButton
                            name="Share with friends!"
                            nameSize={18}
                            icon="/share.svg"
                            style={ButtonVariants.Gray}
                        />
                    </div>
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
