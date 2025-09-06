'use client'

import { useState } from "react";

export default function Checkbox({ label }: { label: string }) {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <label className="flex items-center gap-[10px] cursor-pointer w-full">
            <div className="relative">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    className="sr-only"
                />
                <div className={`w-4 h-4 rounded transition-transform duration-75 active:scale-90 ${isChecked
                    ? 'bg-brand-primary'
                    : 'bg-brand-buttongray border-1 border-black/20 hover:border-brand-primary'
                    }`}>
                    {isChecked && (
                        <div className="flex items-center justify-center h-full">
                            <svg width="12" height="11" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.51567 6.48067L5.72085 12.0968L13.6474 1.63537" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div >
                    )}
                </div>
            </div>
            {label &&
                <div>
                    <span className="leading-none text-[14px]">{label}</span>
                </div>
            }
        </label>
    );
}
