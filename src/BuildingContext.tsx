'use client'

import { createContext, useContext, ReactNode } from 'react'
import { buildings } from '@/data/buildings'
import { buildingTags } from '@/data/tags'

export interface Building {
    id: string
    name: string
    image: string
    tags: string[]
}
export interface Tag {
    id: string
    label: string
    icon: string
}

interface BuildingContextType {
    buildings: Building[]
    tags: Tag[]
}

const BuildingContext = createContext<BuildingContextType>({
    buildings: [],
    tags: []
})

export function BuildingProvider({ children }: { children: React.ReactNode }) {
    return (
        <BuildingContext.Provider value={{ buildings, tags: buildingTags }}>
            {children}
        </BuildingContext.Provider>
    )
}

export const useBuildings = () => useContext(BuildingContext).buildings
export const useBuildingTags = () => useContext(BuildingContext).tags

// Requires that id is a valid building id
export function useBuildingById(id: string): Building {
    return useBuildings().find(b => b.id === id)!
}

// Requires that id is a valid tag id
export function useTagById(id: string): Tag {
    return useBuildingTags().find(b => b.id === id)!
}
