'use client'

import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

export default function Checkbox({ label }: { label: string }) {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <label className="flex items-center cursor-pointer">
            <div className="relative">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    className="sr-only"
                />
                <div className={`w-5 h-5 rounded border-2 ${isChecked
                    ? 'bg-orange-500 border-orange-500'
                    : 'bg-white border-gray-300 hover:border-orange-300'
                    }`}>
                    {isChecked && (
                        <FaCheck />
                    )}
                </div>
            </div>
            {label && <span className="ml-2 text-gray-700">{label}</span>}
        </label>
    );
}
