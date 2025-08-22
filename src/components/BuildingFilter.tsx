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
    const buildings: Building[] = useBuildings().sort((b1, b2) => b1.name.toLowerCase().localeCompare(b2.name.toLowerCase()));
    const buildlingOptions: SelectOption[] =
        buildings.map(b => ({ value: b.id, label: b.name }))

    const [distanceFromValue, setDistanceFromValue] = useState("");
    const handleDistanceFromChange = (value: string) => {
        setDistanceFromValue(value);
    };

    const [distanceToValue, setDistanceToValue] = useState("");
    const handleDistanceToChange = (value: string) => {
        setDistanceToValue(value);
    };


    return (
<<<<<<< Updated upstream
        <div className='flex-1 flex flex-col px-5 overflow-hidden bg-brand-menugray border border-black/10 rounded-xl w-[250px] h-[87vh] px-4 py-4'>
            <div className="flex items-center justify-between w-full flex-shrink-0 pb-4">
                <h2 className="font-sans font-semibold text-[20px]">Filter by...</h2>
                <div className="cursor-pointer">
=======
        <div>
            {isOpen && (
                <div className='flex-1 flex flex-col overflow-hidden bg-brand-menugray border border-black/10 rounded-xl w-[250px] h-[87vh] px-5 py-4'>
                    <div className="flex items-center justify-between w-full flex-shrink-0 pb-4">
                        <h2 className="font-sans font-semibold text-[20px]">Filter by...</h2>
                        <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                            <Image
                                src="/hide-sidebar.svg"
                                alt="hide sidebar"
                                width={16}
                                height={16}
                                className="w-[16px] h-[16px]"
                            />
                        </div>

                    </div>
                    <div className="flex-1 overflow-y-auto">
                        <div className="flex flex-col gap-[14px] items-center sm:items-start">
                            <FilterHeader name="Distance from" desc="" icon="/distance.svg" />
                            <DropdownButton options={buildlingOptions} onChangeAction={handleDistanceFromChange} value={distanceFromValue} />
                            <DropdownButton options={buildlingOptions} onChangeAction={handleDistanceToChange} value={distanceToValue} />
                            <div className="h-10 w-full">
                                <GenericButton name="Add distance from building" nameSize={12} icon="/plus.svg" style={ButtonVariants.Orange} />
                            </div>
                            <FilterHeader name="Atmosphere" desc="Data based on what students say" icon="/atmosphere.svg" />
                            <div className="flex flex-col items-center">
                                <h2 className="w-full">Socialness</h2>
                                <Slider />
                            </div>
                            <div className="flex flex-col items-center">
                                <h2 className="w-full">Noise Level</h2>
                                <Slider />
                            </div>
                            <FilterHeader name="Accommodations" desc="Requirements for you" icon="/accomadations.svg" />
                            <Checkbox label="Service Animal" />
                        </div>
                    </div>
                </div>
            )}
            {!isOpen && (
                <div className='flex-1 flex flex-col gap-[20px] overflow-hidden bg-brand-menugray border border-black/10 rounded-xl w-[50px] h-[87vh] py-6 items-center'>
                    <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                        <Image
                            src="/hide-sidebar.svg"
                            alt="hide sidebar"
                            width={16}
                            height={16}
                            className="w-[16px] h-[16px] rotate-180"
                        />
                    </div>
>>>>>>> Stashed changes
                    <Image
                        src="/hide-sidebar.svg"
                        alt="hide sidebar"
                        width={16}
                        height={16}
                        className="w-[16px] h-[16px]"
                    />
                </div>

            </div>
            <div className="flex-1 overflow-y-auto">
                <div className="flex flex-col gap-[14px] items-center sm:items-start">
                    <FilterHeader name="Distance from" desc="" icon="/distance.svg" />
                    <DropdownButton options={buildlingOptions} onChangeAction={handleDistanceFromChange} value={distanceFromValue} />
                    <DropdownButton options={buildlingOptions} onChangeAction={handleDistanceToChange} value={distanceToValue} />
                    <div className="h-10 w-full">
                        <GenericButton name="Add distance from building" nameSize={12} icon="/plus.svg" style={ButtonVariants.Orange} />
                    </div>
                </div>
            </div>
        </div>
    )
}