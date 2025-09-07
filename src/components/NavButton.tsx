'use client'

import Link from 'next/link';
import Image from 'next/image'

export default function NavButton({ href, name, icon, isActive }: { href: string, name: string, icon: string, isActive: boolean }) {
    return (
        <Link
            href={href}
            className={`
                p-[19px] flex rounded-2xl transition-colors duration-200 items-center justify-center
                ${isActive
                    ? 'bg-brand-primary text-white'
                    : 'hover:bg-gray-100'
                }
            `}
        >
            <div className="flex gap-[10px] items-center text-[18px] h-[22px]">
                <Image
                    src={icon}
                    alt={name}
                    width={16}
                    height={16}
                    className={isActive ? "brightness-0 invert" : "brightness-100"}
                    style={{ height: '16px', width: '16px' }}
                />
                {name}
            </div>

        </Link>
    );
}