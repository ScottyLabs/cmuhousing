'use client'

import Image from 'next/image'
import FilterHeader from './FilterHeader'
import { SelectOption } from './DropdownButton'
import DropdownButton from './DropdownButton'
import { useState } from 'react'
import { Building, useBuildings } from './BuildingContext'
import GenericButton from './GenericButton'
import { ButtonVariants } from './GenericButton'
import Slider from './Slider'
import Checkbox from './Checkbox'

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
        <div>
            {isOpen && (
                <div className='flex-1 flex flex-col overflow-hidden bg-brand-menugray border border-black/10 rounded-xl w-[250px] h-[87vh]'>
                    <div className="flex items-center justify-between w-full flex-shrink-0 pt-6 pb-4 px-5 py-4">
                        <h2 className="font-sans font-semibold text-[20px] leading-none">Filter by...</h2>
                        <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                            <Image
                                src="/hide-sidebar-v2.svg"
                                alt="hide sidebar"
                                width={20}
                                height={20}
                                className="w-[20px] h-[20px]"
                            />
                        </div>

                    </div>
                    <div className="flex-1 overflow-y-auto px-5">
                        <div className="flex flex-col gap-[10px] items-center sm:items-start">
                            <FilterHeader name="Distance from" desc="" icon="/distance.svg" />
                            <DropdownButton options={buildlingOptions} onChangeAction={handleDistanceFromChange} value={distanceFromValue} />

                            <FilterHeader name="Atmosphere" desc="Data based on what students say" icon="/atmosphere.svg" />
                            <div className="flex flex-col w-full">
                                <h2 className="font-sans text-[14px]">Socialness</h2>
                                <Slider />
                            </div>
                            <div className="flex flex-col w-full">
                                <h2 className="font-sans text-[14px]">Noise Level</h2>
                                <Slider />
                            </div>

                            <FilterHeader name="Accommodations" desc="Requirements for you" icon="/accomadations.svg" />
                            <div className="flex flex-col gap-[10px] w-full sm:items-start pl-1">
                                <Checkbox label="Service Animal" />
                                <Checkbox label="Wheelchair accessible" />
                                <Checkbox label="Single room" />
                            </div>

                            <FilterHeader name="Amenities" desc="Preferences" icon="/amenities.svg" />
                            <div className="flex flex-col gap-[10px] w-full sm:items-start pl-1">
                                <Checkbox label="Air conditioning" />
                                <Checkbox label="Laundry on each floor" />
                                <Checkbox label="En suite bathroom" />
                                <Checkbox label="Kitchen access" />
                                <div className="flex flex-col gap-[10px] w-full sm:items-start pl-7">
                                    <Checkbox label="En suite kitchen" />
                                </div>
                                <Checkbox label="Common areas" />
                                <Checkbox label="Elevator access" />
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