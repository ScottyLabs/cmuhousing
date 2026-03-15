import { BestFit, DecentFit, WildCard } from "@/app/building-options/BuildingRowsDemo";
import BuildingFilter from "./BuildingFilter";

export default function Home() {
    return (
        <div className="flex h-full pl-[24px] mt-[26px]">
            <div className="flex-shrink-0">
                <BuildingFilter />
            </div>

            <div className="flex-1 flex flex-col px-5 overflow-hidden">
                <h1 className="font-bold text-[32px] pt-[15px] pb-[28px] flex-shrink-0">All Building Options</h1>
                <div className="flex-1 overflow-y-auto pb-[60px]">
                    <div className="flex flex-col gap-[36px] items-center sm:items-start">
                        <BestFit />
                        <DecentFit />
                        <WildCard />
                    </div>
                </div>
            </div>
        </div>
    );
}
