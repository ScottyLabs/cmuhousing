'use client'

import Link from 'next/link';
import Image from 'next/image'

export default function NavButton({ href, name, icon, isActive }: { href: string, name: string, icon: string, isActive: boolean }) {
    return (
        <Link
            href={href}
            className={`
                px-4 py-2 rounded-xl font-medium transition-colors duration-200
                ${isActive
                    ? 'bg-brand-primary text-white'
                    : 'hover:bg-gray-100'
                }
            `}
        >
            <div className="flex gap-2 items-center">
                <Image
                    src={icon}
                    alt={name}
                    width={14}
                    height={14}
                    className={isActive ? "brightness-0 invert" : "brightness-100"}
                    style={{ height: '14px', width: '14px' }}
                />
                {name}
            </div>

        </Link>
    );
}