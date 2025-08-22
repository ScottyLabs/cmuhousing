'use client'

import { useState } from 'react';

export default function Slider() {
    const [value, setValue] = useState(5);

    return (
        <div className="w-full max-w-md mx-auto">
            <input
                type="range"
                min="1"
                max="10"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                className="w-full h-1 bg-brand-primary rounded appearance-none cursor-pointer slider"
            />
        </div>
    );
}