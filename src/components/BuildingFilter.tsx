'use client'

import Image from 'next/image'
import FilterHeader from './FilterHeader'
import { SelectOption } from './DropdownButton'
import DropdownButton from './DropdownButton'
import { useState } from 'react'
import { Building, useBuildings } from './BuildingContext'
import { B612 } from 'next/font/google'

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
        <div className='flex-1 flex flex-col px-5 overflow-hidden bg-brand-menugray border border-black/10 rounded-xl w-[250px] h-[87vh] px-4 py-4'>
            <div className="flex items-center justify-between w-full flex-shrink-0 pb-4">
                <h2 className="font-sans font-semibold text-[20px]">Filter by...</h2>
                <Image
                    src="/hide-sidebar.svg"
                    alt="hide sidebar"
                    width={16}
                    height={16}
                    className="w-[16px] h-[16px]"
                />
            </div>
            <div className="flex-1 overflow-y-auto">
                <div className="flex flex-col gap-[16px] items-center sm:items-start">
                    <FilterHeader name="Distance from" desc="" icon="/distance.svg" />
                    <DropdownButton options={buildlingOptions} onChangeAction={handleDistanceFromChange} value={distanceFromValue} />
                    <DropdownButton options={buildlingOptions} onChangeAction={handleDistanceToChange} value={distanceToValue} />
                </div>
            </div>
        </div>
    )
}