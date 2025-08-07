'use client'

import { useBuildingById } from "./BuildingContext";
import BuildingOptionRow from "./BuildingOptionRow";

export function BestFit() {
    const best_fit_buildings = [useBuildingById('etower'), useBuildingById('stever'), useBuildingById('boss'), useBuildingById('clyde')]
    return (
        <BuildingOptionRow
            title="Best Fit for You"
            icon="/sparkle.svg"
            icon_alt="sparkle"
            buildings={best_fit_buildings}
        />
    );
}

export function DecentFit() {
    const decent_fit_buildings = [useBuildingById('donner'), useBuildingById('henderson'), useBuildingById('mcgill'), useBuildingById('morewood'), useBuildingById('mudge')]
    return (
        <BuildingOptionRow
            title="Decent Fit"
            icon="/slight-smile.svg"
            icon_alt="slight smile"
            buildings={decent_fit_buildings}
        />
    );
}

export function WildCard() {
    const wild_card_buildings = [useBuildingById('fifth'), useBuildingById('scobell'), useBuildingById('welch')]
    return (
        <BuildingOptionRow
            title="Wild Card"
            icon="/wildcard.svg"
            icon_alt="wild card"
            buildings={wild_card_buildings}
        />
    );
}
