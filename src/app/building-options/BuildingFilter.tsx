'use client'

import Image from 'next/image'
import FilterHeader from './FilterHeader'
import { SelectOption } from '@/components/DropdownButton'
import DropdownButton from '@/components/DropdownButton'
import { useState } from 'react'
import { Building, useBuildings } from '@/components/BuildingContext'
import Slider from '@/components/Slider'
import Checkbox from '@/components/Checkbox'

export default function BuildingFilter() {
    const [isOpen, setIsOpen] = useState(true);

    const buildings: Building[] = useBuildings().sort((b1, b2) => b1.name.toLowerCase().localeCompare(b2.name.toLowerCase()));
    const buildlingOptions: SelectOption[] =
        buildings.map(b => ({ value: b.id, label: b.name }))

    const [distanceFromValue, setDistanceFromValue] = useState("");
    const handleDistanceFromChange = (value: string) => {
        setDistanceFromValue(value);
    };

    return (
        <div className="pb-10">
            {isOpen && (
                <div className='flex-1 flex flex-col overflow-hidden bg-brand-menugray border border-black/10 rounded-xl w-[385px] h-[83vh]'>
                    <div className="flex items-center justify-between w-full flex-shrink-0 pt-[31px] pb-[24px] px-5">
                        <h2 className="font-semibold text-[24px] leading-none">Filter by...</h2>
                        <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                            <Image
                                src="/hide-sidebar-v2.svg"
                                alt="hide sidebar"
                                width={22.4}
                                height={22.4}
                                className="w-[22.4px] h-[22.4px]"
                            />
                        </div>

                    </div>
                    <div className="flex-1 overflow-y-auto px-[24px] pb-[24px]">
                        <div className="flex flex-col gap-[38px] items-center sm:items-start">
                            <div className="flex flex-col w-full gap-[18px]">
                                <FilterHeader name="Distance from" desc="" icon="/distance.svg" />
                                <DropdownButton options={buildlingOptions} onChangeAction={handleDistanceFromChange} value={distanceFromValue} />
                            </div>

                            <div className="flex flex-col w-full gap-[24px]">
                                <FilterHeader name="Atmosphere" desc="Data based on what students say" icon="/atmosphere.svg" />
                                <div className="flex flex-col w-full">
                                    <h2 className="text-[18px]">Socialness</h2>
                                    <Slider />
                                </div>
                                <div className="flex flex-col w-full">
                                    <h2 className="text-[18px]">Noise Level</h2>
                                    <Slider />
                                </div>
                            </div>

                            <div className="flex flex-col w-full gap-[14px]">
                                <FilterHeader name="Accommodations" desc="Requirements for you" icon="/accomadations.svg" />
                                <div className="flex flex-col gap-[26px] w-full sm:items-start pl-1">
                                    <Checkbox label="Service Animal" />
                                    <Checkbox label="Wheelchair accessible" />
                                    <Checkbox label="Single room" />
                                </div>
                            </div>

                            <div className="flex flex-col w-full gap-[14px]">
                                <FilterHeader name="Amenities" desc="Preferences" icon="/amenities.svg" />
                                <div className="flex flex-col gap-[26px] w-full sm:items-start pl-1">
                                    <Checkbox label="Air conditioning" />
                                    <Checkbox label="Laundry on each floor" />
                                    <Checkbox label="En suite bathroom" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {!isOpen && (
                <div className='flex-1 flex flex-col gap-[20px] overflow-hidden bg-brand-menugray border border-black/10 rounded-xl w-[50px] h-[87vh] py-6 items-center'>
                    <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                        <Image
                            src="/hide-sidebar-v2.svg"
                            alt="hide sidebar"
                            width={20}
                            height={20}
                            className="w-[20px] h-[20px]"
                        />
                    </div>
                    <Image
                        src="/distance.svg"
                        alt="distance from"
                        width={30}
                        height={30}
                        className="w-[30px] h-[30px]"
                    />
                    <Image
                        src="/atmosphere.svg"
                        alt="atmosphere"
                        width={30}
                        height={30}
                        className="w-[30px] h-[30px]"
                    />
                    <Image
                        src="/accomadations.svg"
                        alt="accomadations"
                        width={30}
                        height={30}
                        className="w-[30px] h-[30px]"
                    />
                    <Image
                        src="/amenities.svg"
                        alt="amenities"
                        width={30}
                        height={30}
                        className="w-[30px] h-[30px]"
                    />
                </div>
            )}
        </div>

    )
}