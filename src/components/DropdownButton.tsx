'use client'

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image'

export interface SelectOption {
    value: string;
    label: string;
}

export default function DropdownButton({ options, placeholder = "Select an option", onChangeAction, value }: { options: SelectOption[], placeholder?: string, onChangeAction: (value: string) => void, value: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const selectedOption = options.find(opt => opt.value === value);
    // Ref to the dropdown box, used to check if click is inside or outside box
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleSelect = (option: SelectOption) => {
        onChangeAction(option.value);
        setIsOpen(false);
    }

    // Close dropdown when clicking outside or hitting escape
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const target = event.target;
            if (dropdownRef.current && target instanceof Node && !dropdownRef.current.contains(target)) {
                setIsOpen(false);
            }
        }

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        }

        // Add event listener when dropdown is open
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleKeyDown);
        }

        // Cleanup event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    return (
        <div ref={dropdownRef} className="relative w-full">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={"px-4 py-2 rounded-xl font-medium bg-brand-buttongray border border-black/10 w-full flex items-center justify-between select-none cursor-pointer"}
            >
                <span className="font-medium">
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <Image
                    src="/dropdown-closed.svg"
                    alt="dropdown closed"
                    width={14}
                    height={8}
                    className="w-[14px] h-[8px]"
                />
            </div>
            {isOpen && (
                <div className="absolute w-full mt-2 z-10 w-full bg-brand-menugray border border-black/10 rounded-xl shadow-lg max-h-60 overflow-y-auto">
                    {options.map(option => (
                        <div
                            key={option.value}
                            onClick={() => handleSelect(option)}
                            className="px-4 py-1 hover:bg-brand-buttongray first:rounded-t-lg last:rounded-b-lg border-b last:border-b-0 border-black/5 select-none"
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}