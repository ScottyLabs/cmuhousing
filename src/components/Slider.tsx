'use client'

import { useState } from 'react';

export default function Slider() {
    const [value, setValue] = useState(5);

    return (
        <div className="flex flex-col h-[23px] justify-center">
            <div className="relative flex flex-col justify-center">
                <input
                    type="range"
                    min="1"
                    max="10"
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                    className="w-full h-[4px] bg-gray-300 rounded appearance-none cursor-pointer slider"
                    style={{
                        background: `linear-gradient(to right,
                                var(--color-brand-primary) 0%,
                                var(--color-brand-primary) ${((value - 1) / 9) * 100}%,
                                #d1d5db ${((value - 1) / 9) * 100}%,
                                #d1d5db 100%)`
                    }}
                />

                {/* Left endpoint circle - only visible when value > 1 */}
                {value > 1 && (
                    <div
                        className="absolute w-[13.55px] h-[13.55px] bg-white rounded-full pointer-events-none"
                        style={{
                            border: `2px solid var(--color-brand-primary)`,
                            left: '0px',
                            top: '50%',
                            transform: 'translateY(-50%)'
                        }}
                    />
                )}

                {/* Right endpoint circle - only visible when value < 10 */}
                {value < 10 && (
                    <div
                        className="absolute w-[13.55px] h-[13.55px] bg-white rounded-full pointer-events-none"
                        style={{
                            border: `2px solid var(--color-brand-primary)`,
                            right: '0px',
                            top: '50%',
                            transform: 'translateY(-50%)'
                        }}
                    />
                )}
            </div>

            <style jsx>{`
                .slider::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    height: 22.6px;
                    width: 22.6px;
                    border-radius: 50%;
                    background: var(--color-brand-primary);
                    cursor: pointer;
                    border: 0px;
                }
               
                .slider::-moz-range-thumb {
                    height: 22.6px;
                    width: 22.6px;
                    border-radius: 50%;
                    background: var(--color-brand-primary);
                    cursor: pointer;
                    border: 0px;
                }
            `}</style>
        </div>
    );
}