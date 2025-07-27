'use client'

import { useBuildingById } from "./BuildingContext";
import BuildingOption from "./BuildingOption";
import { Building } from "./BuildingContext"

export default function BuildingOptionRow({ buildings }: { buildings: Building[] }) {
    return (
        <div className="flex gap-[12px]">
            {buildings.map(b => (<BuildingOption key={b.id} building={b} />))}
        </div>
    );
}