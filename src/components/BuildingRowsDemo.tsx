'use client'

import { useBuildingById } from "./BuildingContext";
import BuildingOptionRow from "./BuildingOptionRow";

export function BestFit() {
    const best_fit_buildings = [useBuildingById('etower'), useBuildingById('stever'), useBuildingById('boss'), useBuildingById('clyde')]
    return (
        <BuildingOptionRow buildings={best_fit_buildings} />
    );
}

export function DecentFit() {
    const decent_fit_buildings = [useBuildingById('donner'), useBuildingById('henderson'), useBuildingById('mcgill'), useBuildingById('morewood'), useBuildingById('mudge')]
    return (
        <BuildingOptionRow buildings={decent_fit_buildings} />
    );
}

export function WildCard() {
    const wild_card_buildings = [useBuildingById('fifth'), useBuildingById('scobell'), useBuildingById('welch')]
    return (
        <BuildingOptionRow buildings={wild_card_buildings} />
    );
}
