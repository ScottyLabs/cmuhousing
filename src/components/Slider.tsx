'use client'

import { useState } from 'react';

export default function Slider() {
    const [value, setValue] = useState(5);

    return (
        <div>
            <div className="relative">
                <input
                    type="range"
                    min="1"
                    max="10"
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                    className="w-full h-1 bg-gray-300 rounded appearance-none cursor-pointer slider"
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
                        className="absolute w-3 h-3 bg-white rounded-full pointer-events-none"
                        style={{
                            border: `2px solid var(--color-brand-primary)`,
                            left: '0px',
                            top: '50%',
                            transform: 'translateY(-20%)'
                        }}
                    />
                )}

                {/* Right endpoint circle - only visible when value < 10 */}
                {value < 10 && (
                    <div
                        className="absolute w-3 h-3 bg-white rounded-full pointer-events-none"
                        style={{
                            border: `2px solid var(--color-brand-primary)`,
                            right: '0px',
                            top: '50%',
                            transform: 'translateY(-20%)'
                        }}
                    />
                )}
            </div>

            <style jsx>{`
                .slider::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    height: 18px;
                    width: 18px;
                    border-radius: 50%;
                    background: var(--color-brand-primary);
                    cursor: pointer;
                    border: 0px;
                }
               
                .slider::-moz-range-thumb {
                    height: 18px;
                    width: 18px;
                    border-radius: 50%;
                    background: var(--color-brand-primary);
                    cursor: pointer;
                    border: 0px;
                }
            `}</style>
        </div>
    );
}