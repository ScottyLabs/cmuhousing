'use client'

import Image from 'next/image'

export default function GenericButton({ name, icon }: { name: string, icon: string }) {
    return (
        <div className={"px-4 py-2 rounded-xl font-medium transition-colors duration-200 bg-gray-100 hover:bg-gray-300"}
        >
            <div className="flex gap-2">
                <Image
                    src={icon}
                    alt={name}
                    width={14}
                    height={14}
                />
                {name}
            </div>

        </div>
    );
}